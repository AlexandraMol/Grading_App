import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Axios from "axios";
import { useState, useEffect, useRef } from "react";
import OtherFile from "./OtherFile";

const SelectedOtherProject = () => {
  const [files, setFiles] = useState([]);

  let { id, idProject } = useParams();
  const idStudentFinal = id.split(":");

  const getFiles = () => {
    Axios.get(
      `http://localhost:8080/api/${idStudentFinal[1]}/otherprojects/${idProject}/files`,
      { params: { idProject: idProject } }
    ).then((response) => {
      setFiles(response.data);
    });
  };

  const sendGrade = () => {
    const form = document.getElementById("gradeForm");
    const e = document.getElementById("grade");
    const grade = e.value;
    form.style.display = "none";

    Axios.post(
      `http://localhost:8080/api/${idStudentFinal[1]}/otherprojects/${idProject}/grade`,
      {
        idProject: idProject,
        grade: grade,
      }
    ).then((response) => {
      console.log(response);
    });
  };

  useEffect(() => {
    getFiles();
  }, []);

  return (
    <div>
      <div id="gradeForm">
        <h1>Acorda o nota!</h1>
        <select id="grade">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <button type="button" onClick={sendGrade}>
          Send grade
        </button>
      </div>

      <div className="file-list">
        {files.map((e) => (
          <OtherFile key={e.id} item={e} />
        ))}
      </div>
    </div>
  );
};

export default SelectedOtherProject;
