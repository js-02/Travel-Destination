import Header from "../header/Header";
import Footer from "../footer/Footer";
import Tours from "../tours/Tours";
import NavBar  from "../Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import TourDetails from "../TourDetails/TourDetails";
function Home (props){
function cardClicking(props){


}
    return(
        <>
        <NavBar></NavBar>
     <Header></Header>
     <Tours onClick={cardClicking}></Tours>
     <Footer></Footer>
     </>
    );
}
export default Home;