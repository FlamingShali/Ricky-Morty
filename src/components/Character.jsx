const Character = ({ characters }) => {
  return (
    <div>
      {characters.map((character) => (
        <div key={character.id}>
          <p>{character.name}</p>
          <p>{character.status}</p>
        </div>
      ))}
    </div>
  );
};

export default Character;
