import Axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
const SERVER = "http://localhost:8080/";

function Login() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  let userId = 0;

  const getUsers = async () => {
    const response = await fetch("http://localhost:8080/api/users");
    const data = await response.json();
    setUsers(data);

    for (var i = 0; i < data.length; i++) {
      if (data[i].email === emailLogin && data[i].password === passwordLogin) {
        userId = await data[i].id;
        console.log("merge");
        navigate(`/studentPage/:${userId}`);
      }
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => {
          setEmailLogin(e.target.value);
        }}
      ></input>
      <input
        type="text"
        placeholder="Password"
        onChange={(e) => {
          setPasswordLogin(e.target.value);
        }}
      ></input>
      <button onClick={getUsers}>Login</button>
    </div>
  );
}

export default Login;
