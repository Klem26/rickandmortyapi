import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import rick from "../img/RickMorty.jpeg";
import rick1 from "../img/rick1.jpg";
import rick2 from "../img/rick2.jpg";
import rick3 from "../img/rick3.jpg";
import rick4 from "../img/rick4.jpg";
import rick5 from "../img/rick5.jpg";
import rick6 from "../img/rick6.jpg";
import rick7 from "../img/rick7.jpg";
import rick8 from "../img/rick8.jpg";
import rick9 from "../img/rick9.jpg";
import rick10 from "../img/rick10.jpg";
import rick11 from "../img/rick11.jpg";
import rick12 from "../img/rick12.jpeg";
function Home() {
  return (
    <ImageList
      sx={{ width: "100%", height: "100%" }}
      variant="masonry"
      cols={4}
      gap={6}
    >
      <ImageListItem>
        <img src={rick7} alt=" Rick Morty" />
      </ImageListItem>
      <ImageListItem>
        <img src={rick8} alt=" Rick Morty" />
      </ImageListItem>
      <ImageListItem>
        <img src={rick} alt=" Rick Morty" />
      </ImageListItem>

      <ImageListItem>
        <img src={rick2} alt=" Rick Morty" />
      </ImageListItem>
      <ImageListItem>
        <img src={rick9} alt=" Rick Morty" />
      </ImageListItem>

      <ImageListItem>
        <img src={rick5} alt=" Rick Morty" />
      </ImageListItem>
      <ImageListItem>
        <img src={rick4} alt=" Rick Morty" />
      </ImageListItem>
      <ImageListItem>
        <img src={rick10} alt=" Rick Morty" />
      </ImageListItem>
      <ImageListItem>
        <img src={rick6} alt=" Rick Morty" />
      </ImageListItem>
      <ImageListItem>
        <img src={rick11} alt=" Rick Morty" />
      </ImageListItem>
      <ImageListItem>
        <img src={rick3} alt=" Rick Morty" />
      </ImageListItem>
      <ImageListItem>
        <img src={rick1} alt=" Rick Morty" />
      </ImageListItem>
      <ImageListItem>
        <img src={rick12} alt=" Rick Morty" />
      </ImageListItem>
      <ImageListItem>
        <img src={rick5} alt=" Rick Morty" />
      </ImageListItem>
      <ImageListItem>
        <img src={rick4} alt=" Rick Morty" />
      </ImageListItem>
      <ImageListItem>
        <img src={rick10} alt=" Rick Morty" />
      </ImageListItem>
      <ImageListItem>
        <img src={rick6} alt=" Rick Morty" />
      </ImageListItem>
      <ImageListItem>
        <img src={rick11} alt=" Rick Morty" />
      </ImageListItem>
      <ImageListItem>
        <img src={rick3} alt=" Rick Morty" />
      </ImageListItem>
      <ImageListItem>
        <img src={rick1} alt=" Rick Morty" />
      </ImageListItem>
      <ImageListItem>
        <img src={rick7} alt=" Rick Morty" />
      </ImageListItem>
      <ImageListItem>
        <img src={rick8} alt=" Rick Morty" />
      </ImageListItem>
      <ImageListItem>
        <img src={rick9} alt=" Rick Morty" />
      </ImageListItem>
    </ImageList>
  );
}

export default Home;
