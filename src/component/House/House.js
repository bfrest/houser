import React from "react";

export default function House(props) {
  return (
    <div>
      {props.houseList.map(house => {
        return (
          <ul>
            <li>{house.name}</li> <li>{house.price}</li>
            <button>Delete</button>
          </ul>
        );
      })}
    </div>
  );
}
