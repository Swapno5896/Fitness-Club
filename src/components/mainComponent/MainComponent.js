import React from 'react';
import Equipment from '../home/Equipment/Equipment';
import Facilities from '../home/Facilities/Facilities';
import NavBar from '../home/NavBar/NavBar';

const MainComponent = () => {
    return (
        <div>
        <NavBar/>
        <Facilities/>
        <Equipment/>
        </div>
    );
};

export default MainComponent;