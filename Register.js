import { NavLink } from "react-router-dom";
import "./Register.css";
import { useState } from "react";

//Register function starts here

function Register() {
  const initialValue = {
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  // useState for data
  const [data, setData] = useState(initialValue);

  // useState for checkbox
  const [check, setCheck] = useState(false);

  function handleChange(e) {
    e.stopPropagation();
    // console.log([e.target.name],e.target.value);
    setData({ ...data, [e.target.name]: e.target.value });
  }
  function handleClick(e) {
    e.stopPropagation();
    if (check === true) {
    }
    setCheck(!check);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // console.log(data);

    const sendData = {
      username: data.username,
      email: data.email,
      password: data.password,
      confirm_password: data.confirm_password,
      checkbox: check,
    };
    setCheck(false);
    setData(initialValue);

    alert("Successfully Register  ");

    // sendDate is used as parameter in axios to send register data to backend

    // console.log('Register-backend-data',sendData);
  }
  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="user-name">User name</label>
          <input
            type="text"
            id="user-name"
            placeholder="Username"
            name="username"
            value={data.username}
            onChange={handleChange}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            name="password"
            value={data.password}
            onChange={handleChange}
          />

          <label htmlFor="confirm_password">Confirm Password</label>
          <input
            type="password"
            id="confirm_password"
            placeholder="Confirm Password"
            name="confirm_password"
            value={data.confirm_password}
            onChange={handleChange}
          />

          <label htmlFor="checkbox">
            <input
              type="checkbox"
              id="checkbox"
              name="checkbox"
              value={check}
              onClick={handleClick}
            />

            <NavLink className="link">
              I have read and agree to the terms
            </NavLink>
          </label>

          <button type="submit" onSubmit={handleSubmit}>
            Register
          </button>
          <p>
            already have an account{" "}
            <NavLink to="/login" className="link login">
              {" "}
              Login
            </NavLink>
          </p>
        </div>
      </form>
    </>
  );
}
export default Register;
