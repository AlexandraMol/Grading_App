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
  const [gradeUpdated, setGrade] = useState(0);
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

  async function sendGrade() {
    const form = document.getElementById("gradeForm");
    const formUpdated = document.getElementById("formGradeUpdate");
    const e = document.getElementById("grade");
    const grade = e.value;
    form.style.display = "none";
    formUpdated.style.display = "block";
    const res = await Axios.get(
      `http://localhost:8080/api/${idStudentFinal[1]}/otherprojects/${idProject}/grade`
    );
    const data = await res;
    console.log("data este", data);

    if (data.data.length === 0) {
      Axios.post(
        `http://localhost:8080/api/${idStudentFinal[1]}/otherprojects/${idProject}/grade`,
        {
          idProject: idProject,
          grade: grade,
          idUser: idStudentFinal[1],
        }
      ).then((response) => {
        console.log(response);
      });
      setGrade(grade);
    } else {
      console.log("s-a mai acordat o chestie");
    }
  }

  async function updateGrade() {
    const e = document.getElementById("gradeUpdated");
    const grade = e.value;
    const res = await Axios.get(
      `http://localhost:8080/api/${idStudentFinal[1]}/otherprojects/${idProject}/grade`
    );

    Axios.put(
      `http://localhost:8080/api/${idStudentFinal[1]}/otherprojects/${idProject}/grade`,
      {
        idProject: idProject,
        grade: grade,
        idUser: idStudentFinal[1],
      }
    ).then((response) => {
      console.log(response);
    });
    setGrade(grade);
  }

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

      <div id="formGradeUpdate" style={{ display: "none" }}>
        <p>Nota acordata de tine {gradeUpdated}</p>
        <h1>Acorda o noua nota!</h1>
        <select id="gradeUpdated">
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
        <button type="button" onClick={updateGrade}>
          Update grade
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
