import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
//import City from "./components/About";


function App() {
  return (
  <>
  <Routes>         
   <Route path="/" element={<Home />} />        
   {/* <Route path="city" element={<City />} />           */}
  </Routes>
  </>
  );
}

export default App;
