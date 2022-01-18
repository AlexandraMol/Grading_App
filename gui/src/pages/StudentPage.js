import React from "react";
import Axios from "axios";
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
  console.log(idFinal);
  async function projectsTest() {
    const res = Axios.get(
      `http://localhost:8080/api/${idFinal[1]}/myprojects`,
      {
        params: { UserId: idFinal[1] },
      }
    );
    const data = await res;
    console.log(data.data);
    if (data.data.length > 0) {
      navigate(`/studentPage/${id}/otherprojects`);
    }
  }

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
      <button onClick={projectsTest}>Vizualizeaza proiecte</button>
    </>
  );
};

export default StudentPage;
