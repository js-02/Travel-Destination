
import { Routes, Route } from "react-router-dom";
import Tours from "../tours/Tours";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../header/Header";

export default function TourDetails(props)
{
    let { id } = useParams();

    const [isClicked, setIsClicked] = useState(false);
    function clicking(event) {
        event.preventDefault();
        setIsClicked(!isClicked);
      }
      let tourData = props.data.filter(element=> element.id === id) ;
      console.log("tour"+tourData[0].id);
return(
    
    <>
    <Header />
    <p>{tourData[0].name}</p>
            <img src={tourData[0].image} ></img>
   <p>
                  {tourData[0].info.substring(0, 100)}

                  {isClicked ? (
                    <p>
                      {tourData[0].info.slice(101)}
                      <a href="" onClick={clicking}>
                        {isClicked ? "see less" : "see more"}
                      </a>
                    </p>
                  ) : (
                    <a href="" onClick={clicking}>
                      {isClicked ? "see less" : "see more"}
                    </a>
                  )}
                </p>
            

    </>
);

}

