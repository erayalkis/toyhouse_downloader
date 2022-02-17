import "../Stylesheets/Character.css";

const Character = (props) => {
  const { name, imgURL } = props;

  return (
    <div className="d-flex align-items-center justify-content-between pt-2">
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
