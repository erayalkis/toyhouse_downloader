import Character from "./Character";

const Characters = (props) => {
  const { queue } = props;

  return (
    <div className="w-75">
      {queue.map((character) => (
        <Character
          key={character.id}
          name={character.name}
          imgURL={character.imgURL}
        />
      ))}
    </div>
  );
};

export default Characters;
