import React from "react";

export default function House(props) {
  return (
    <div>
      {props.houseList.map(house => {
        return (
          <div>
            <li>name: {house.name}</li>
            <li>address: {house.address}</li>
            <button
              onClick={() => {
                props.deleteHouse(house.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
