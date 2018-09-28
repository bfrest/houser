import React from "react";
import "./House.css";

const House = props => {
  return (
    <div className="house">
      {console.log(props)}
      <img src={props.houseInfo.image} alt="house" />
      <p>{props.houseInfo.name}</p>
      <p>{props.houseInfo.address}</p>
      <p>{props.houseInfo.city}</p>
      <p>{props.houseInfo.state}</p>
      <p>{props.houseInfo.zipcode}</p>
      <p>{props.houseInfo.monthly_mortgage}</p>
      <p>{props.houseInfo.desired_rent}</p>
      <button onClick={() => props.delete(props.houseInfo.id)}>Delete</button>
    </div>
  );
};

export default House;
