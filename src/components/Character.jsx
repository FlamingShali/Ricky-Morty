import styled from "styled-components";

const Character = ({ characters }) => {
  const StyledCharacters = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10rem;
    font-size: 2.6rem;
    align-items: center;
    justify-content: center;
    color: white;
  `;

  return (
    <StyledCharacters>
      {characters.map((character) => (
        <div key={character.id}>
          <p>Name: {character.name}</p>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <img src={character.image} />
        </div>
      ))}
    </StyledCharacters>
  );
};

export default Character;
