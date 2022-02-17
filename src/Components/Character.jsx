import "../Stylesheets/Character.css";
import { useContext } from "react";
import QueueContext from "../Contexts/QueueContext";

const Character = (props) => {
  const { name, imgURL } = props;
  const { setQueue } = useContext(QueueContext);

  const removeCharacter = () => {
    setQueue((old) => old.filter((character) => character.id !== props.id));
  };

  return (
    <div
      className="d-flex align-items-center justify-content-between pt-2 pb-2 character-container"
      onDoubleClick={removeCharacter}
    >
      <img
        className="img-fluid img-thumbnail queue-thumbnail"
        src={imgURL}
        alt={`For ${name}`}
      />
      <p>{name}</p>
    </div>
  );
};

export default Character;
