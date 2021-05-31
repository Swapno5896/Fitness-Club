import React from "react";
import './Class.css'
import bodyBuilding from "../../../images/body-building.jpg";
import fatLoss from "../../../images/fat-loss.jfif";
import tranning from "../../../images/tranning.jfif";
import ClassCard from "../ClassCard/ClassCard";
const Class = () => {
  const fakeData = [
    {
      title: "Fat Loss",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum iste minima cumque, quasi et deleniti.",
      img: fatLoss,
    },
    {
      title: "Tranning",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum iste minima cumque, quasi et deleniti.",
      img: tranning,
    },
    {
      title: "Body Building",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum iste minima cumque, quasi et deleniti.",
      img: bodyBuilding,
    },
  ];
  return (
    <div className='Class-container'>
      <div className='class-top-banner d-flex align-items-center'>
        <div class="card" style={{ width: "18rem" }}>
          <div class="card-body">
            <h5 class="card-title">KEY FEATURE.</h5>
            <p class="card-text">Weight Tranning</p>{" "}
            <p class="card-text">Personal Tranning</p>{" "}
            <p class="card-text">Top Class Equepment</p>{" "}
            <p class="card-text">Custom Diet Plan</p>
          </div>
        </div>
      </div>
      <h2 className='text-center Class-title '>OUR CLASSESS</h2>
      <div className=" d-flex justify-content-center ">
        <div class="row w-80">
          {fakeData.map((dt) => (
            <ClassCard dt={dt} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Class;
