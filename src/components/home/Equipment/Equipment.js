import React from "react";
import e1 from "../../../images/e-1.jpg";
import e2 from "../../../images/e-2.jpg";
import e3 from "../../../images/e-3.jpg";
import e4 from "../../../images/e-4.jpg";

const Equipment = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h1>Equipment</h1>
            <h1 style={{ border: "1px solid yellow", width: "150px" }}></h1>
            <br></br>
          </div>
        </div>
        <div className="row justify-content-center align-items-center bg-light text-dark">
          <div className="col-md-3">
            <img className="img-fluid bg-none" src={e1} alt="" />
          </div>
          <div className="col-md-3">
            <div>
              <h4>CROSS TRAINER</h4>
              <p>
                Cross trainer is a stationary exercise machine used to simulate
                stair climbing, walking, or running without causing excessive
                pressure to the joints, hence decreasing the risk of impact
                injuries.
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <img className="img-fluid" src={e2} alt="" />
          </div>
          <div className="col-md-3">
            <h4>FUNCTIONAL TRAINER</h4>
            <p>
              If you want to perform and look your best, the Functional Trainer
              is the perfect tool for you. Over hundred effective movements
              using your own bodyweight for resistance. Fast and easy workout.
              For all fitness levels and goals.
            </p>
          </div>
        </div>
        <div className="row justify-content-center align-items-center bg-light text-dark mt-4">
          <div className="col-md-3">
            <img className="img-fluid bg-none" src={e3} alt="" />
          </div>
          <div className="col-md-3">
            <div>
              <h4>SEATED DIP</h4>
              <p>
                The seated dip exercise tones the triceps, or the back portion
                of your upper arms. The machine allows you to determine the
                amount of weight you are pushing and using to.challenge your
                triceps.
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <img className="img-fluid" src={e2} alt="" />
          </div>
          <div className="col-md-3">
            <h4>DUAL FUNCTION TRAINER</h4>
            <p>
              The Dual Functional Trainer Abdominal/Lower Back is a perfect
              machine for users looking for functional, comfortable and space
              saving strength equipment. This machine is equipped with wider
              range of motion adjustment, 5 positions on abs and 4 positions on
              lower back.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Equipment;
