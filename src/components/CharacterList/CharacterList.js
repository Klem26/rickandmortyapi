import { NavLink } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const CharacterList = ({ characters, props }) => {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {characters.map((character) => (
        <ListItem alignItems="flex-start" key={character.id}>
          <ListItemText>
            <NavLink
              to={`/characters/${character.id}`}
              style={() => ({
                color: "#7b1ea2",
                textDecoration: "none",
              })}
            >
              <p>{character.name}</p>

              {props}
            </NavLink>
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
};

export default CharacterList;
