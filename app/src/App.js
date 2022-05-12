import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import TourDetails from './components/TourDetails/TourDetails';
//import City from "./components/About";
const travelData=require("./data/db.json");

function App() {
  return (
  <>
  <Routes>         
   <Route path="/" element={<Home />} />        
   <Route path="/city/:id" element={<TourDetails data={travelData}/>} />          
  </Routes>
  </>
  );
}

export default App;
