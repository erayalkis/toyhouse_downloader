import Character from "./Character";
import "../Stylesheets/Character.css";

const Characters = (props) => {
  const { queue } = props;

  return (
    <div className="w-75 h-100 overflow-scroll characters">
      {queue.map((character) => (
        <Character
          key={character.id}
          id={character.id}
          name={character.name}
          imgURL={character.image}
        />
      ))}
    </div>
  );
};

export default Characters;
