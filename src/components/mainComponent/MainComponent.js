import React from "react";
import Class from '../Home/Class/Class'
import Facilities from '../Home/Facilities/Facilities'
import Equipment from '../Home/Equipment/Equipment'
import NavBar from "../Home/navBar/NavBar";
const MainComponent = () => {
  return (
    <div>

<NavBar></NavBar>
      <Class></Class>
      <Facilities />
      <Equipment />
    </div>
  );
};

export default MainComponent;
