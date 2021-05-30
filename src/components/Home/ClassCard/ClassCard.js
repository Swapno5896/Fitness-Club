import React from "react";
import "./ClassCard.css";
const ClassCard = (props) => {
  const { title, description, img } = props.dt;
  return (
    <div
      class="col-sm-4 "
      style={{ backgroundImage: "../../../images/body-building.jpg" }}
    >
      <div class="card">
        <div style={{ height: "56px" }}>
          <img style={{ height: "186px",opacity:'.3' }} src={img} class="card-img-top " alt="..." />
        </div>

        <div class="card-body ClassCard-tet">
          <h5 class="card-title text-center">{title}</h5>
          <p class="card-text text-center">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
