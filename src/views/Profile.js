import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import CharacterDetail from "../components/CharacterDetail/CharacterDetail";

function Profile({ isAuth }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null);
  const [isError, setIsError] = useState(false);

  const goBack = () => navigate(-1);

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
    fetchDataById();
  }, []);

  const fetchDataById = async () => {
    try {
      let response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      if (response.status === 200) {
        let data = await response.json();
        setCharacter(data);
      } else {
        throw "Error fetching users list";
      }
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <>
      <Button variant="contained" onClick={goBack}>
        Go back
      </Button>
      {isError ? (
        <h3> Error! Please try again later</h3>
      ) : (
        <div>{character && <CharacterDetail character={character} />}</div>
      )}
    </>
  );
}

export default Profile;
