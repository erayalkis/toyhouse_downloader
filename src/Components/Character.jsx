const Character = (props) => {
  const { name, imgURL } = props;

  return (
    <div className="d-flex align-items-center justify-content-between">
      <img
        className="img-fluid w-75 h-75 img-thumbnail"
        src={imgURL}
        alt={`For ${name}`}
      />
      <p>{name}</p>
    </div>
  );
};

export default Character;
