import React from "react";
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
    <div className=' d-flex justify-content-center '>
      <div class="row w-75">
        {fakeData.map((dt) => (
          <ClassCard dt={dt} />
        ))}
      </div>
    </div>
  );
};

export default Class;
