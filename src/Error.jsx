
const Error = (props) => {

  return(
    <div style={{display: props.error ? "block" : "none"}}>
      { props.error ? 
          <small className="text-danger">{props.error}</small>
        :
          null
      }
    </div>
  )
};

export default Error;