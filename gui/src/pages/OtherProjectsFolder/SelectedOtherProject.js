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

const SelectedOtherProject=()=>{

    const [files,setFiles]=useState([]);

    let {id, idProject}= useParams();
    const idStudentFinal = id.split(":");
    
    const getFiles = () => {
        Axios.get(
          `http://localhost:8080/api/${idStudentFinal[1]}/otherprojects/${idProject}/files`,
          { params: { idProject: idProject } }
        ).then((response) => {
          setFiles(response.data);
        });
      };

      useEffect(() => {
        getFiles();
      }, []);

      return (
          <div>
               <div className="file-list">
        {files.map((e) => (
          <OtherFile key={e.id} item={e} />
        ))}
      </div>
          </div>
      )
}

export default SelectedOtherProject