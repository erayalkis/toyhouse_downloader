
const Limitations = () => {

  return(
    <div className="mt-5">
      <h1 className="display-4 text-center">Limitations for this app</h1>
      <div className="mx-auto mt-4" style={{width:500}}>
        <ul>
          <li>This app can't fetch galleries for locked (private) profiles.</li>
          <li>This app can't fetch images that have NSFW tags on them.</li>
          <li>This app can't fetch galleries that have custom designs.</li>
        </ul>   
      </div>
      
    </div>
  )
};

export default Limitations;