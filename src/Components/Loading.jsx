
const Loading = (props) => {

  return(
    <div className="text-primary" style={{display: props.loading ? "block" : "none"}}>
      {props.loading ? props.loading : null}
    </div>
  )
};

export default Loading;