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
import MyFile from "./MyFile";
import { useNavigate } from "react-router-dom";
const SelectedProject = () => {
  const navigate = useNavigate();
  const [filename, setFileName] = useState("");
  const [file, setFile] = useState("");
  const [files, setFiles] = useState([]);

  let { id, idProject } = useParams();
  const idStudentFinal = id.split(":");

  const getFiles = () => {
    Axios.get(
      `http://localhost:8080/api/${idStudentFinal[1]}/myprojects/${idProject}/files`,
      { params: { idProject: idProject } }
    ).then((response) => {
      setFiles(response.data);
    });
  };
  console.log(files);
  useEffect(() => {
    getFiles();
  }, []);

  const addFile = () => {
    Axios.post(
      `http://localhost:8080/api/${id}/myprojects/${idProject}/addFile`,
      {
        fileName: filename,
        file: file,
      }
    ).then((response) => {
      console.log(response);
    });
    // navigate(`/studentPage/${id}/myprojects/${idProject}`);
    getFiles();
    const form = document.getElementById("formAddFile");
    form.style.display = "none";
  };

  const showForm = () => {
    const form = document.getElementById("formAddFile");
    form.style.display = "block";
  };

  return (
    <>
      <div id="formAddFile" style={{ display: "none" }}>
        <h2>Filename:</h2>
        <input
          type="text"
          onChange={(e) => {
            setFileName(e.target.value);
          }}
        ></input>
        <h2>File</h2>
        <input
          type="text"
          onChange={(e) => {
            setFile(e.target.value);
          }}
        ></input>
        <button type="button" onClick={addFile}>
          Add file
        </button>
      </div>
      <button onClick={showForm}>Adauga un nou fisier</button>

      <div className="file-list">
        {files.map((e) => (
          <MyFile key={e.id} item={e} />
        ))}
      </div>
    </>
  );
};

export default SelectedProject;
