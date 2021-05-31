import React from "react";
import NavBar from '../home/navBar/NavBar'
import Class from '../home/Class/Class'
import Equipment from '../home/Equipment/Equipment'
import Facilities from '../home/Facilities/Facilities'







const MainComponent = () => {
  return (
    <div>
   <NavBar></NavBar>
     <Class/>
<Equipment></Equipment>
<Facilities></Facilities>
    </div>
  );
};

export default MainComponent;
