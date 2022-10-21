// <NavBar> component should return: a <nav> element w two child <a> elements that link to #home and #about

import React from "react";

function NavBar() {
  // update the JSX being returned!
  return (
  <nav>
    <a href= "#about">About</a>
    <a href="#home">Home</a>
  </nav>
  );
}

export default NavBar;
