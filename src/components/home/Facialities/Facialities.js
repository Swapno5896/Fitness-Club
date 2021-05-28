import React from "react";
import css from "./Facialities.css"
import { Card, CardGroup } from "react-bootstrap";
import { FaWineBottle, FaPills, FaShower, FaCar, FaRunning, FaAward, FaDumbbell, FaShieldAlt } from 'react-icons/fa';

const Facialities = () => {
  return (
    <div className="body-color container">
      <h1>FACIALITIES</h1>
      <h1></h1>
      <div>
      <CardGroup className="m-3 text-center card-size">
        <Card className="m-3 ">
          <Card.Body>
          <h2><FaWineBottle/></h2>
          
            <p>Quality Protein Shakes in  Cheaper Price</p>
          </Card.Body>
        </Card>

        <Card className="m-3">
          <Card.Body>
          <h2><FaPills/></h2>
            <p>Quality Supplements Facilities</p>
          </Card.Body>
        </Card>

        <Card className="m-3">
          <Card.Body>
              <h2><FaShower/></h2>
            <p>Top notch Steam & Shower Facilities</p>
          </Card.Body>
        </Card>

        <Card className="m-3">
          <Card.Body>
              <h2><FaCar/></h2>
            <p>High Grade Car Parking Facilities</p>
          </Card.Body>
        </Card>

      </CardGroup>
      </div>

      <div>
      <CardGroup className="m-3 text-center">
        <Card className="m-3">
          <Card.Body>
              <h2><FaRunning/></h2>
            <p>Bodybuilding & Fitness Friendly Gym</p>
          </Card.Body>
        </Card>

        <Card className="m-3">
          <Card.Body>
              <h2><FaAward/></h2>
            <p>Certified Trainer</p>
          </Card.Body>
        </Card>

        <Card className="m-3">
          <Card.Body>
              <h2><FaDumbbell/></h2>
            <p>Wide Range of Equipment</p>
          </Card.Body>
        </Card>
        <Card className="m-3">
          <Card.Body>
              <h2><FaShieldAlt/></h2>
            <p>First Class Security Measures</p>
          </Card.Body>
        </Card>
      </CardGroup>
      </div>
    </div>
  );
};

export default Facialities;
