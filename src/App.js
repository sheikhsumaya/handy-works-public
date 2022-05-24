
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/Home/About";
import Home from "./Pages/Home/Home";
import Banner from "./Pages/Shared/Banner";
import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <div>
     
      <Navbar></Navbar>
      <Routes>
      {/* <Route path="/" element={}></Route> */}
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
         {/* <Route path="/" element={}></Route> */}
      </Routes>
    </div>
  );
}

export default App;

