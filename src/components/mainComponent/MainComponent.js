import React from 'react';
import Equipment from '../home/Equipment/Equipment';
import Facialities from '../home/Facialities/Facialities';
import NavBar from '../home/NavBar/NavBar';

const MainComponent = () => {
    return (
        <div>
        <NavBar/>
        <Facialities/>
        <Equipment/>
        </div>
    );
};

export default MainComponent;