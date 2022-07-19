import React, { useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";

import NavBar from "./components/NavBar";
import About from "./routes/About";
import Home from "./routes/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <Router>
      <div className="App ">
           <div className="navigations">
            <NavBar />
            </div> 
        <div className="gridding">
          

          <div className="grid__item2 mx-1">
            <SideBar />
          </div>
          <div className="grid__item3">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
