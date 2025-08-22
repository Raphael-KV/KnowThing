import React from "react";
import "./Loader.css"; // new loader styles

const Loader = () => (
  <div className="wrapper">
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="shadow"></div>
    <div className="shadow"></div>
    <div className="shadow"></div>
  </div>
);

export default Loader;