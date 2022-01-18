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
      <button
        id="btnBackHome"
        onClick={() => {
          navigate(`/`);
        }}
      >
        Go back
      </button>
      <div className="container">
        <button
          id="btnBackHome"
          onClick={() => {
            navigate(`/`);
          }}
        >
          Logout
        </button>
        <div className="containerStudentPage">
          <button
            className="btnStudentPage"
            onClick={() => {
              navigate(`/studentPage/${id}/myprojects`);
            }}
          >
            Proiectele mele
          </button>

          <button
            className="btnStudentPage"
            onClick={() => {
              navigate(`/studentPage/${id}/addproject`);
            }}
          >
            Adauga proiect
          </button>

          <button onClick={projectsTest} className="btnStudentPage">
            Vizualizeaza proiecte
          </button>
        </div>
      </div>
    </>
  );
};

export default StudentPage;
