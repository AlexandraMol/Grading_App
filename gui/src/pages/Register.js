import Axios from "axios";
import { useNavigate } from "react-router";
import React, { useState, useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [emailReg, setEmailReg] = useState("");
  const [passowordReg, setPassowordReg] = useState("");
  const [userTypeReg, setUserTypeReg] = useState(0);
  const navigate = useNavigate();
  const register = () => {
    const e = document.getElementById("userType");
    setUserTypeReg(e.value);
    console.log(userTypeReg);
    if (emailReg === "" && passowordReg == "") {
      toast.error("Nu ai introdus datele!");
    } else if (emailReg === "") {
      toast.error("Nu ai introdus adresa de email!");
    } else if (passowordReg === "") {
      toast.error("Nu ai introdus parola!");
    } else {
      Axios.post("http://localhost:8080/api/register", {
        email: emailReg,
        password: passowordReg,
        userType: e.value,
      }).then((response) => {
        console.log(response);
      });

      navigate("/login");
    }
  };

  return (
    <div className="container">
      <ToastContainer
        className="toast"
        position="top-right"
        autoClose={3000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover={false}
      />
      <button
        id="btnBackHome"
        onClick={() => {
          navigate(`/`);
        }}
      >
        Go back
      </button>
      <div className="registration">
        <h1>Registration</h1>

        <input
          type="text"
          placeholder="Email"
          className="input"
          onChange={(e) => {
            setEmailReg(e.target.value);
          }}
        ></input>
        <br></br>

        <input
          type="password"
          className="input"
          placeholder="Password"
          onChange={(e) => {
            setPassowordReg(e.target.value);
          }}
        ></input>
        <br></br>

        <select id="userType">
          <option value="1">Student</option>
          <option value="0">Profesor</option>
        </select>
        <br></br>
        <button onClick={register} className="btnRegister2">
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
