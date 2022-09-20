import "./Form.css";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");

  const handleClick = (event) =>{
    event.preventDefault();
    console.log(name);
  }

  return (
    <fieldset>
      <legend>Registration Form</legend>
      <form>
        <label>Name:</label>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label>Mobile:</label>
        <input
          type="number"
          onChange={(e) => {
            setMobile(e.target.value);
          }}
        />
        <label>Address:</label>
        <input
          type="text"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
        <input type="submit" onSubmit={handleClick}/>
        <div>
          <span>
            Name of person is: <span id="name">{name}</span>
          </span>
          <span>
            Mobile of person is: <span id="mobile">{mobile}</span>
          </span>
          <span>
            Address of person is: <span id="address">{address}</span>
          </span>
        </div>
      </form>
    </fieldset>
  );
};
export default Form;
