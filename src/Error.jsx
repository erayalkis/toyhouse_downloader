
const Error = (props) => {

  return(
    <div style={{display: props.display ? "block" : "none"}}>
      <small className="text-danger">Please pass in a Toyhouse link!</small>
    </div>
  )
};

export default Error;