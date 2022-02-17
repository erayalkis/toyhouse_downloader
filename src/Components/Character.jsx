const Character = (props) => {
  const { id, name, imgURL } = props;

  return (
    <div>
      <p>{name}</p>
      <img src={imgURL} alt={`For ${name}`} />
    </div>
  );
};

export default Character;
