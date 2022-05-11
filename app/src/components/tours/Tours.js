// import Tour from "./tour/Tour";



// export default function Tours(){

//   return(
// <Tour></Tour>
//   );
// }


import travelArr from "../../data/db.json";
import { useState } from "react"

const [isClicked, setIsClicked] = useState(false);

function Tours(props){

  function clicking(){
    setIsClicked(!isClicked);
      
  }

    return(
    <>
{
travelArr.map(element =>{
return( 
<>
<p>{element.name}</p>
<img src={element.image}></img>
<p>{element.info.substring(0,100)}<a href="#lessmore" onClick={clicking}>{isClicked ? "see less" : "see more"}</a></p>
<p>==========================</p>
</>
);
})
}
 </>
  );
}
export default Tours;