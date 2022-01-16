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
import ProjectFile from "./ProjectFile";

const ClickedProject = () => {
  const [files, setFiles] = useState([]);
  const [grade, setGrade] = useState(0);

  let { idStudent, projectId } = useParams();

  console.log(projectId);
  console.log(idStudent);
  console.log("aici");

  const getGrades = () => {
    Axios.get(
      `http://localhost:8080/api/students/${idStudent}/projects/${projectId}/grade`,
      { params: { studentId: idStudent, idProject: projectId } }
    ).then((response) => {
      setGrade(response.data);
    });
  };
  console.log(grade);
  const getFiles = () => {
    Axios.get(
      `http://localhost:8080/api/students/${idStudent}/projects/${projectId}/files`,
      { params: { studentId: idStudent, idProject: projectId } }
    ).then((response) => {
      setFiles(response.data);
    });
  };

  useEffect(() => {
    getFiles();
    getGrades();
  }, []);

  console.log(Object.values(grade));
  const gradeValue = Object.values(grade);

  return (
    <>
      <div>Nota: {gradeValue}</div>

      <br></br>
      <div className="file-list">
        {files.map((e) => (
          <ProjectFile key={e.id} item={e} />
        ))}
      </div>
    </>
  );
};

export default ClickedProject;
