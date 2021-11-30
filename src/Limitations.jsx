
const Limitations = () => {

  return(
    <div className="mt-5">
      <h1 className="display-4 text-center">Limitations for Toyhou.dl</h1>
      <div className="mx-auto mt-4" style={{width:500}}>
        <ul>
          <li>Toyhou.dl can't fetch galleries for locked (private) profiles.</li>
          <li>Toyhou.dl can't fetch images that have NSFW tags on them.</li>
          <li>Toyhou.dl can't fetch galleries that have custom designs.</li>
        </ul>   
      </div>
      
    </div>
  )
};

export default Limitations;