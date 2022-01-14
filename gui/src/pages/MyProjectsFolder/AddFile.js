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

const AddFile = () => {
  const [filename, setFileName] = useState("");
  const [file, setFile] = useState("");
  let { id, idProject } = useParams();
  const idStudentFinal = id.split(":");
  const navigate = useNavigate();
  console.log(id);
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
  };
  return (
    <div className="formAddFile">
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
  );
};

export default AddFile;
