
const Loading = (props) => {

  return(
    <div style={{display: props.loading ? "block" : "none"}}>
      {props.loading ? props.loading : null}
    </div>
  )
};

export default Loading;