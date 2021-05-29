import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faCertificate, faCoffee, faDumbbell, faRunning, faShieldAlt, faShower, faTablet, faWineBottle } from '@fortawesome/free-solid-svg-icons';

const Facilities = () => {
    const facilities = [{
        picture: faCoffee,
    }]
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Facilities</h1>
                        <h1 style={{ border: "1px solid yellow", width: "100px" }}></h1>
                        <br></br>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 p-5 shadow text-center  mb-5 bg-light rounded">
                            <div className="facilities-main text-center m-2 ">
                                <FontAwesomeIcon className="fa-2x" icon={faWineBottle} />
                            </div>
                            <div>
                                <h4 className="mt-4">Quality Protein Shakes in Cheaper Price</h4>
                            </div>
                        </div>
                        <div className="col-md-3 p-5 shadow mb-5 text-center bg-light rounded">
                            <div className="facilities-main text-center ">
                                <FontAwesomeIcon className="fa-2x" icon={faTablet} />
                            </div>
                            <div>
                                <h4 className="mt-4">Quality Supplements Facilities</h4>
                            </div>
                        </div>
                        <div className="col-md-3 p-5 shadow text-center  mb-5 bg-light rounded">
                            <div className="facilities-main  m-2">
                                <FontAwesomeIcon className="fa-2x" icon={faShower} />
                            </div>
                            <div>
                                <h4 className="mt-4">Top notch Steam & Shower Facilities</h4>
                            </div>
                        </div>
                        <div className="col-md-3 shadow p-5 text-center mb-5 bg-light rounded">
                            <div className="facilities-main  m-2">
                                <FontAwesomeIcon className="fa-2x" icon={faCar} />
                            </div>
                            <div>
                                <h4 className="mt-4">High Grade Car Parking Facilities</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 p-5 shadow text-center  mb-5 bg-light rounded">
                            <div className="facilities-main text-center m-2 ">
                                <FontAwesomeIcon className="fa-2x" icon={faRunning} />
                            </div>
                            <div>
                                <h4 className="mt-4">Bodybuilding & Fitness Friendly Gym</h4>
                            </div>
                        </div>
                        <div className="col-md-3 p-5 shadow mb-5 text-center bg-light rounded">
                            <div className="facilities-main text-center ">
                                <FontAwesomeIcon className="fa-2x" icon={faCertificate} />
                            </div>
                            <div>
                                <h4 className="mt-4">Certified Trainer</h4>
                            </div>
                        </div>
                        <div className="col-md-3 p-5 shadow text-center  mb-5 bg-light rounded">
                            <div className="facilities-main  m-2">
                                <FontAwesomeIcon className="fa-2x" icon={faDumbbell} />
                            </div>
                            <div>
                                <h4 className="mt-4">Wide Range of Equipment</h4>
                            </div>
                        </div>
                        <div className="col-md-3 shadow p-5 text-center mb-5 bg-light rounded">
                            <div className="facilities-main  m-2">
                                <FontAwesomeIcon className="fa-2x" icon={faShieldAlt} />
                            </div>
                            <div>
                                <h4 className="mt-4">First Class Security Measures</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Facilities;