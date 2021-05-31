import React from "react";
import Facilities from "../home/Facilities/Facilities";
import Class from "../home/Class/Class";
import Equipment from '../home/Equipment/Equipment'
import NavBar from "../home/navBar/NavBar";
const MainComponent = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Class />
      <Facilities />
    <Equipment></Equipment>
    </div>
  );
};

export default MainComponent;
