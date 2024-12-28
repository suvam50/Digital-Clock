import { useEffect, useState } from 'react'
import DigitalClock from './DigitalClock';


function ParentComponent(){

    const[showComponent,setShowComponent] = useState(true);

    const togglecomponent=()=>{
        //setShowComponent((prev)=>!prev);
        setShowComponent(!showComponent)
    };

    return(
        <div>
            <div>
            <button onClick={togglecomponent}>
                {showComponent ? "Show Timer" : "Hide Timer"}
            </button>
            </div>
            {showComponent && <DigitalClock/>}   
        </div>
    )


}

export default ParentComponent;