import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { useNavigate } from "react-router";
const StudentPage = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const idFinal = id.split(":");
  return (
    <>
      <p>Merge! {idFinal}</p>
      <button
        onClick={() => {
          navigate(`/studentPage/${id}/myprojects`);
        }}
      >
        Proiectele mele
      </button>
      <button
        onClick={() => {
          navigate(`/studentPage/${id}/addproject`);
        }}
      >
        Adauga proiect
      </button>
      <button>Vizualizeaza proiecte</button>
    </>
  );
};

export default StudentPage;
