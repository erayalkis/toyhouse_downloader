import Character from "./Character";

const Characters = (props) => {
  const { queue } = props;

  return queue.map((character) => (
    <Character
      key={character.id}
      id={character.id}
      name={character.name}
      imgURL={character.imgURL}
    />
  ));
};

export default Characters;
