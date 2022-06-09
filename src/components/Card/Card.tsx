import { useState, useEffect } from "react";
import { useAutocomplete } from "@mui/base/AutocompleteUnstyled";
import { styled } from "@mui/material/styles";
import { autocompleteClasses } from "@mui/material/Autocomplete";
import { Link } from "react-router-dom";

const Label = styled("label")({
  display: "block",
});

const Input = styled("input")(({ theme }) => ({
  width: 245,
  borderRadius: 5,
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.getContrastText(theme.palette.background.paper),
}));

const Listbox = styled("ul")(({ theme }) => ({
  width: 245,
  margin: 0,
  padding: 0,
  zIndex: 1,
  position: "absolute",
  listStyle: "none",
  backgroundColor: "#ffffff",
  overflow: "auto",
  maxHeight: 200,
  border: "1px solid rgba(0,0,0,.25)",
  [`& li.${autocompleteClasses.focused}`]: {
    backgroundColor: "#f3e5f5",
    color: "#f3e5f5",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-around",
  },
  "& li:active": {
    backgroundColor: "#2977f5",
    color: "red",
  },
  " & a": {
    textDecoration: "none",
    color: "#9c27b0",
    marginLeft: 10,
    marginRight: 10,
  },
  "& span": {
    color: "#7b1fa2",
  },
}));

export default function UseAutocomplete() {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let response = await fetch(" https://rickandmortyapi.com/api/character");
      if (response.status === 200) {
        let data = await response.json();
        setCharacterList(data.results);
      } else {
        throw "Error fetching users list";
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: "use-autocomplete-demo",
    options: characterList,
    getOptionLabel: (option) => option.name,
  });

  return (
    <form>
      <div {...getRootProps()}>
        <Label {...getInputLabelProps()}>Search</Label>
        <Input {...getInputProps()} />
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {(groupedOptions as typeof characterList).map((option, index) => (
            <li {...getOptionProps({ option, index })}>
              <Link to={`/characters/${option.id}`}>{option.name}</Link>
              <span> {option.status}</span>
            </li>
          ))}
        </Listbox>
      ) : null}
    </form>
  );
}
