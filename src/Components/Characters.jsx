const Characters = (props) => {
  const { queue } = props;

  return queue.map((character) => (
    <div key={character.id}>{character.name}</div>
  ));
};

export default Characters;
