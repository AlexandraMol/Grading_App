import * as React from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router";
import "../assets/Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <div className="logo"></div>
        <p>Aplicație de acordat note</p>

        <button
          className="btnRegister"
          onClick={() => {
            navigate("/register");
          }}
        >
          Register
        </button>

        <button
          className="btnLogin"
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </button>
      </div>
    </>
  );
};

export default Home;
