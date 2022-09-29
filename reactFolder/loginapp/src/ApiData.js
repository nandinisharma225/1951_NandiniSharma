import React from "react";
import Userdata from "./Userdata.json";
import "./ApiData.css"

const ApiData = () => {
  return (
    <div className="dataDiv">
      <h1>Component</h1>
      <table border={2}>
        <thead>
          <tr>
            <th>IndexNo</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {Userdata.map((user, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{user.Name}</td>
              <td>{user.Email}</td>
              <td>{user.Mobile}</td>
              <td>{user.Address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApiData;
