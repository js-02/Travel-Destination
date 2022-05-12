// import Tour from "./tour/Tour";

// export default function Tours(){

//   return(
// <Tour></Tour>
//   );
// }
import TourDetails from "../TourDetails/TourDetails";
import { useState } from "react";
import { Link } from "react-router-dom";

import travelArr from "../../data/db.json";

import { Routes, Route } from "react-router-dom";

function Tours(props) {
  <Link to={`/city/`}></Link>;
  function seeMore(mess) {}

  const [isClickedDiv, setIsClickedDiv] = useState(false);

  // <Route path="/city" element={<TourDetails />} />;
  function detailsClicking(event) {
    event.preventDefault();
    setIsClickedDiv(!isClickedDiv);
  }
  let arr = [{}];
  return (
    <>
      {travelArr.map((element) => {
        return (
         < Link to={`/city/${element.id}`}>
          <div key={element.id}>
            <p>{element.name}</p>
            <img src={element.image} ></img>
            <p>==========================</p>
          
          </div>
</Link>
        );
      })}
       
              {/* <TourDetails data={element}></TourDetails> */}

              
            
    </>
  );
}
export default Tours;
