import { users, orders } from "../db"
import React, { useState } from "react";
import "../App.css"


export const Orders = () => {

  //  Get all data when admin logs in and populate it
  // store it in redux
  const [user, setUser] = useState(users)
  const [ordersList, setOrdersList] = useState(orders)
 const sortOrders = (sortBy) => {
   const dupeOrdersList = Object.assign([], ordersList);
   dupeOrdersList.sort(function(a, b) {
    var keyA = a[sortBy],
      keyB = b[sortBy];
    // Compare the 2 dates
    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
  });
  setOrdersList(dupeOrdersList);
 }
  return (
    <div>
      <div>
        <div>
          <select className="controls items" name="progress" id="progress" onChange={(e)=>sortOrders(e.target.value)}>
            <option value="id">ID</option>
            <option value="status">Status</option>
            <option value="cost">Cost</option>
          </select>
        </div>
        <table className="orders">

          <thead>
            <tr>
              <th>ID</th>
              <th>Problem</th>
              <th>Client Name</th>
              <th>Status</th>
              <th>Cost</th>
              <th>Change Status</th>
              <th>Accept</th>
            </tr>
          </thead>
          <tbody>
            {ordersList.map((e) => (

              <tr className="orders-row">
                <td className="id">{e.id}</td>
                <td className="problem">{e.problem}</td>
                <td className="owner">{e.owner_name}</td>
                <td className="status">{e.brand}</td>
                <td className="cost">{e.cost}</td>
                <td className="change-status">

                  {/* Show select dropdown only if status is Not Accepted */}
                  <select className="changeStatus inputBar" name="changeStatus">
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                    <option value="Not Accepted">Not Accepted</option>
                  </select>
                </td>
                <td className="accept">
                  {/* Show this button only if status is Not Accepted */}
                  {/* on change make request to update it in db, and show changed status in table */}
                  <button className="submit">Accept</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
