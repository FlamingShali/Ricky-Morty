import { useEffect, useState } from "react";
import Character from "../components/Character";
import CharacterNavBar from "../components/CharacterNavBar";
import styled from "styled-components";

const StyledNavCharacters = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPages, setMaxPages] = useState();

  useEffect(
    function () {
      async function fetchCharacters() {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?page=${page}`
        );
        const data = await response.json();
        setCharacters(data.results);
        console.log(characters);
        console.log(data.info.pages);
        setMaxPages(data.info.pages);
      }
      fetchCharacters();
    },
    [page]
  );

  function nextPageHandler() {
    page >= maxPages ? page : setPage((page) => page + 1);
  }
  function prevPageHandler() {
    page <= 1 ? page : setPage((page) => page - 1);
  }

  return (
    <>
      <CharacterNavBar />
      <StyledNavCharacters>
        {page <= 1 ? (
          ""
        ) : (
          <button onClick={prevPageHandler}>Previous Page</button>
        )}

        <p>Page: {page}</p>
        <button onClick={nextPageHandler}>Next Page</button>
      </StyledNavCharacters>
      <Character characters={characters} />
    </>
  );
};

export default Characters;
