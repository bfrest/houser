import React from "react";
import "./House.css";

export default function House(props) {
  return (
    <div className="house-wrapper">
      {props.houseList.map(house => {
        return (
          <div className="list-item">
            <li>Name: {house.name}</li>
            <li>Address: {house.address}</li>
            <li>City: {house.city}</li>
            <li>State: {house.state}</li>
            <li>Zip: {house.zipcode}</li>
            <li>Monthly Mortgage: {house.monthly_mortgage}</li>
            <li>Desired Rent: {house.desired_rent}</li>
            <button
              onClick={() => {
                props.deleteHouse(house.id);
              }}>
              Delete
            </button>
          </div>
        );
      })}
      {console.log(props.houseList)}
    </div>
  );
}
