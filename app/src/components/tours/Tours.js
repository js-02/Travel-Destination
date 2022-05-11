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
  <Link to={`/city/`}></Link>
  function seeMore(mess) {}
  const [isClicked, setIsClicked] = useState(false);
  const [isClickedDiv, setIsClickedDiv] = useState(false);
  function clicking(event) {
    event.preventDefault();
    setIsClicked(!isClicked);
  }
  // <Route path="/city" element={<TourDetails />} />;
  function detailsClicking(event) {
    event.preventDefault();
    setIsClickedDiv(!isClickedDiv);
  }
let arr=[{}];
  return (
    <>
      {travelArr.map((element) => {
        return (
          <div  > 


           
            <li key={element.id}>
              <p>{element.name}</p>
              <img src={element.image} onClick={detailsClicking} ></img>


              {isClickedDiv? (
              
              <p>
                {element.info.substring(0, 100)}

                {isClicked ? (
                  <p>
                    {element.info.slice(101)}
                    <a href="" onClick={clicking}>
                      {isClicked ? "see less" : "see more"}
                    </a>
                  </p>
                ) : (
                  <a href="" onClick={clicking}>
                    {isClicked ? "see less" : "see more"}
                  </a>
                )}
              </p>):""}
          
              <p>==========================</p>
            </li>
          </div>
        );
      })}
    </>
  );
}
export default Tours;
