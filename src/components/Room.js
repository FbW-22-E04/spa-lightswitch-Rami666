import { useState } from "react";
import "./Room.css";

function Room() {
    const [isLit, setLit] = useState(true);

    const lightHandler = () => {
        setLit(!isLit);
    }

     
  return <div className={`${isLit === true ? 'lit' : 'dark' }`}>
    <button onClick={lightHandler}>Light Switch</button>

    {isLit ? <p>"the room is lit"</p> : <p>"the room is dark"</p>}
   
  </div>;
}

export default Room;