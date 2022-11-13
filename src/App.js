import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from './component/Layout'
import Movielisting from './component/Movielisting'
import Error from './Router/Error'
import Moviedetails from "./component/Moviedetails";



const App = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Layout/>}>
              <Route index element={<Movielisting/>}></Route>
              <Route path="/details" element={<Moviedetails/>}></Route>
          </Route>
          <Route path="*" element={<Error/>}></Route>
        </Routes>
    </div>
  );
};

export default App;
