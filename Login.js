import { useState } from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";
function Login() {
  const initialValue = {
    email: "",
    password: "",
  };

  const [user, setUser] = useState(initialValue);
  const [check, setCheck] = useState(false);

  function handleChange(e) {
    e.stopPropagation();

    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleClick(e) {
    e.stopPropagation();
    if (check === true) {
    }
    setCheck(!check);
  }

  function handleSubmit(e) {
    e.preventDefault();

    alert("Successfully Logged in  ");

    const sendData = {
      email: user.email,
      password: user.password,
      checkbox: check,
    };
    console.log("Login", sendData);
    setUser(initialValue);

     // sendDate is used as parameter in axios to send Login data to backend

    // console.log('Login-backend-data',sendData);

  }
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email or Username"
            name="email"
            onChange={handleChange}
            value={user.email}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={user.password}
          />
          <label htmlFor="checkbox">
            <input
              type="checkbox"
              id="checkbox"
              name="checkbox"
              onClick={handleClick}
            />
            Remember me
          </label>
          <NavLink className="link">Forget password?</NavLink>
          <button type="submit" onSubmit={handleSubmit}>
            Login
          </button>
          <p>Not a member</p>
          <NavLink to="/register" className="link register">
            {" "}
            Register
          </NavLink>
        </div>
      </form>
    </>
  );
}
export default Login;
