import React from 'react';
import css from "./Equipment.css"
import { Card, CardGroup } from "react-bootstrap";


const Equipment = () => {
    return (
        <div>
            <h1>Equipment</h1>
            <div>
            <div>
      <CardGroup  >
        <Card >
          <Card.Body>
            <p>Quality Protein Shakes in  Cheaper Price</p>
          </Card.Body>
        </Card>

        <Card  >
          <Card.Body className="b-color">
          <h5 class="card-title mt-5">CROSS TRAINER</h5>
            <p className="text-justify">Cross trainer is a stationary exercise machine used to simulate stair climbing, walking, or running without causing excessive pressure to the joints, hence decreasing the risk of impact injuries.</p>
          </Card.Body>
        </Card>

        <Card  >
          <Card.Body>
            <p>Top notch Steam & Shower Facilities</p>
          </Card.Body>
        </Card>

        <Card  >
          <Card.Body className="b-color">
              <h5 class="card-title mt-5 ">FUNCTIONAL TRAINER</h5>
            <p className="text-justify">If you want to perform and look your best, the Functional Trainer is the perfect tool for you. Over hundred effective movements using your own bodyweight for resistance. Fast and easy workout. For all fitness levels and goals.</p>
          </Card.Body>
        </Card>

      </CardGroup>
      </div>

      <div>
      <CardGroup  >
        <Card  >
          <Card.Body className="c-color">
          <h5 class="card-title text-warning">SEATED DIP</h5>
            <p class="text-white text-justify">The seated dip exercise tones the triceps, or the back portion of your upper arms. The machine allows you to determine the amount of weight you are pushing and using to.challenge your triceps.</p>
          </Card.Body>
        </Card>

        <Card  >
          <Card.Body>
            <p>Certified Trainer</p>
          </Card.Body>
        </Card>

        <Card  >
          <Card.Body className="c-color">
          <h5 class="card-title text-warning">SEATED DIP</h5>
            <p class="text-white text-justify">The Dual Functional Trainer Abdominal/Lower Back is a perfect machine for users looking for functional, comfortable and space saving strength equipment. This machine is equipped with wider range of motion adjustment, 5 positions on abs and 4 positions on lower back.</p>
          </Card.Body>
        </Card>
        <Card  >
          <Card.Body>
            <p>First Class Security Measures</p>
          </Card.Body>
        </Card>
      </CardGroup>
      </div>
            </div>
        </div>
    );
};

export default Equipment;