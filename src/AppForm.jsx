import { useState } from "react";

const AppForm = (props) => {
  const [queryStr, setQueryStr] = useState("");

  const handleSubmit = () => {
    props.setHasError(false)
    
    let id = null;
    if(queryStr.startsWith('https')) {
      id = queryStr.split("/")[3] 
    } else if(queryStr.startsWith('toyhou.se')) {
      id = queryStr.split("/")[1]
    } else {
      props.setHasError(true)
    }
    console.log(id);
  };

  return(
    <div className="input-group mb-3">
      <input type="text" className="form-control form-control-lg" placeholder="Toyhouse Link"
        value={queryStr} onChange={(e) => setQueryStr(e.target.value)} />
      <div className="input-group-append">
        <button className="btn btn-outline-primary btn-lg" type="button" onClick={handleSubmit}>Button</button>
      </div>
    </div>
  )
};

export default AppForm;