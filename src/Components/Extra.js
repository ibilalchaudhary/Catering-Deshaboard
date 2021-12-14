/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function Extra() {
  const initialState = [
    { id: "1", Pname: "abc", UPrice: "123", Qty: "12", Amount: "4321" },
    { id: "1", Pname: "abc", UPrice: "123", Qty: "12", Amount: "4321" },
  ];

  const [user, setUser] = useState(initialState);

  return (
    <div className="container">
      <div>
        {user.map((use) => (
          <div>
            {use.id} | {use.Pname} | {use.UPrice}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Extra;
