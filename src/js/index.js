//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let seconds = 0;
setInterval(function () {
    const boxSix = Math.floor(seconds / 10000) % 10;
    const boxFive = Math.floor(seconds / 10000) % 10;
    const boxFour = Math.floor(seconds / 1000) % 10;
    const boxThree = Math.floor(seconds / 100) % 10;
    const boxTwo = Math.floor(seconds / 10) % 10;
    const boxOne = Math.floor(seconds / 1) % 10;
    seconds++;
    ReactDOM.render(<Home digitOne={boxOne} digitTwo={boxTwo} digitThree={boxThree} digitFour={boxFour} digitFive={boxFive} digitSix={boxSix} />, document.querySelector("#app"));
}, 1000); 
