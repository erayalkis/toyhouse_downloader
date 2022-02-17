const Character = (props) => {
  const { name, imgURL } = props;

  return (
    <div className="d-flex align-items-center">
      <img className="img-fluid" src={imgURL} alt={`For ${name}`} />
      <p>{name}</p>
    </div>
  );
};

export default Character;
