import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../components/Card/Card.tsx";
import CharacterList from "../components/CharacterList/CharacterList";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

function Characters({ isAuth }) {
  const [characterList, setCharacterList] = useState([]);
  const [isError, setIsError] = useState(false);
  const [value, setValue] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let response = await fetch("https://rickandmortyapi.com/api/character");
      if (response.status === 200) {
        let data = await response.json();
        setCharacterList(data.results);
      } else {
        throw "Error fetching users list";
      }
    } catch (error) {
      setIsError(true);
    }
  };

  const filterCharacter = characterList.filter((character) => {
    return character.name.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      {isError ? (
        <h3> Error! Please try again later</h3>
      ) : (
        <div>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar>
                <SearchIcon />
                <InputBase
                  color="secondary"
                  type="text"
                  placeholder="search"
                  onChange={(e) => setValue(e.currentTarget.value)}
                />
              </Toolbar>
            </AppBar>
            <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static">
                <Toolbar>
                  <Card />
                </Toolbar>
              </AppBar>
            </Box>
          </Box>

          {characterList && (
            <CharacterList
              characters={filterCharacter}
              props={
                filterCharacter.length !== 0 && filterCharacter.length < 20
                  ? filterCharacter[0].status
                  : ""
              }
            />
          )}
        </div>
      )}
    </Box>
  );
}

export default Characters;
