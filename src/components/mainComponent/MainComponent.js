import React from 'react';
import Equipment from '../home/Equipment/Equipment';
import Facialities from '../home/Facialities/Facialities';
import Footer from '../home/Footer/Footer';
import LastFooter from '../home/LastFooter/LastFooter';
import NavBar from '../home/NavBar/NavBar';

const MainComponent = () => {
    return (
        <div>
        <NavBar/>
        <Facialities/>
        <Equipment/>
        <Footer/>
        <LastFooter/>
        </div>
    );
};

export default MainComponent;