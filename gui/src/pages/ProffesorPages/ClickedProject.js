import React from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { useState, useEffect } from "react";
import ProjectFile from "./ProjectFile";

const ClickedProject = () => {
  const [files, setFiles] = useState([]);
  const [grade, setGrade] = useState(0);

  let { idStudent, projectId } = useParams();

  const getGrades = () => {
    Axios.get(
      `http://localhost:8080/api/students/${idStudent}/projects/${projectId}/grade`,
      { params: { studentId: idStudent, idProject: projectId } }
    ).then((response) => {
      setGrade(response.data);
    });
  };

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

  const gradeValue = Object.values(grade);

  return (
    <>
      <div className="container-project">Nota: {gradeValue}</div>

      <br></br>
      <div className="container-project">
        {files.map((e) => (
          <ProjectFile key={e.id} item={e} />
        ))}
      </div>
    </>
  );
};

export default ClickedProject;
