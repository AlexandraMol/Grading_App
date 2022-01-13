import Axios from "axios";
import { useNavigate } from "react-router";
import React, { useState, useEffect, useRef } from "react";
const SERVER = "http://localhost:8080/";

const Register = () => {
  const [emailReg, setEmailReg] = useState("");
  const [passowordReg, setPassowordReg] = useState("");
  const [userTypeReg, setUserTypeReg] = useState(0);
  const navigate = useNavigate();
  const register = () => {
    Axios.post("http://localhost:8080/api/register", {
      email: emailReg,
      password: passowordReg,
      userType: userTypeReg,
    }).then((response) => {
      console.log(response);
    });

    navigate("/login");
  };

  return (
    <div className="Register">
      <div className="registration">
        <h1>Registration</h1>
        <label>Email</label>
        <input
          type="text"
          onChange={(e) => {
            setEmailReg(e.target.value);
          }}
        ></input>

        <label>Password</label>
        <input
          type="text"
          onChange={(e) => {
            setPassowordReg(e.target.value);
          }}
        ></input>

        <label>Usertype</label>
        <input
          type="number"
          onChange={(e) => {
            setUserTypeReg(e.target.value);
          }}
        ></input>

        <button onClick={register}>Register</button>
      </div>
    </div>
  );
};

export default Register;
