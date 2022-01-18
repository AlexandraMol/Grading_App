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
import { useNavigate } from "react-router";
const SelectedOtherProject = () => {
  const navigate = useNavigate();
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

  async function startFunction() {
    const res = await Axios.get(
      `http://localhost:8080/api/${idStudentFinal[1]}/otherprojects/${idProject}/grade`
    );

    const data = res;

    const form = document.getElementById("gradeForm");
    const formUpdated = document.getElementById("formGradeUpdate");

    if (data.data[0].grade === "") {
      form.style.display = "block";
      formUpdated.style.display = "none";
    } else if (res) {
      setGrade(data.data[0].grade);
      form.style.display = "none";
      formUpdated.style.display = "block";
    }
  }

  useEffect(() => {
    getFiles();
    startFunction();
  }, []);

  return (
    <div className="page-wrapper">
      <button
        id="btnBackHome"
        onClick={() => {
          navigate(`/studentPage/${id}`);
        }}
      >
        Go back
      </button>
      <div className="container">
        <div id="gradeForm">
          <label class="input-grade">Acorda o nota!</label>
          <select id="grade" class="input-grade">
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
          <button
            type="button"
            id="btnGrade"
            class="input-grade"
            onClick={sendGrade}
          >
            Send grade
          </button>
        </div>

        <div className="file-list">
          {files.map((e) => (
            <OtherFile key={e.id} item={e} />
          ))}
        </div>
      </div>

      <div
        id="formGradeUpdate"
        className="container"
        style={{ display: "none" }}
      >
        <p>Nota acordata de tine {gradeUpdated}</p>

        <h1>Acorda o noua nota!</h1>
        <select id="gradeUpdated" class="input-grade">
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
        <button
          type="button"
          id="btnGrade2"
          class="input-grade"
          onClick={updateGrade}
        >
          Update grade
        </button>
      </div>
    </div>
  );
};

export default SelectedOtherProject;
