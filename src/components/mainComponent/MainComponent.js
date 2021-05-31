import React from "react";
import Equipment from "../home/Equipment/Equipment";
import Facialities from "../home/Facialities/Facialities";
import Footer from "../home/Footer/Footer";
import LastFooter from "../home/LastFooter/LastFooter";
import NavBar from "../home/navBar/NavBar";
import Class from '../home/Class/Class'
const MainComponent = () => {
  return (
    <div>
      <NavBar />
      <Class></Class>
      <Facialities />
      <Equipment />
      <Footer />
      <LastFooter />
    </div>
  );
};

export default MainComponent;
