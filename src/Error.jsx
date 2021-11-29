
const Error = (props) => {

  return(
    <div style={{display: props.display ? "block" : "none"}}>
      <small className="text-danger">Please type in a Toyhouse link!</small>
    </div>
  )
};

export default Error;