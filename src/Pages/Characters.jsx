import { useEffect, useState } from "react";
import Character from "../components/Character";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(
    function () {
      async function fetchCharacters() {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?page=${page}`
        );
        const data = await response.json();
        setCharacters(data.results);
        console.log(characters);
      }
      fetchCharacters();
    },
    [page]
  );

  function nextPageHandler() {
    setPage((page) => page + 1);
  }
  function prevPageHandler() {
    setPage((page) => page - 1);
  }

  return <Character characters={characters} />;
};

export default Characters;
