//<Home> should return <div id="home"> with a child <h1> element set to "firebrick" color and content "Your Name is a Web Developer from Your City

import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  return (
  <div id="home">
    <h1 style={{color: "firebrick"}}>
    {name} is a Web Developer from {city}
    </h1>
  </div>
  );
}

export default Home;
