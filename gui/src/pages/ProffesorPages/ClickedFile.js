import React from "react";
import Axios from "axios";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

import { useState, useEffect, useRef } from "react";
 import ClickedFileContent from "./ClickedFileContent";

    const ClickedFile= () => {
    const [file,setFile] = useState([]);

    let{idStudent,projectId,idFile}=useParams();


    async function getFile() {
        const res = await Axios.get(
          `http://localhost:8080/api/students/${idStudent}/projects/${projectId}/files/${idFile}`
        );
        const { data } = await res;
        setFile(data);
      }
      useEffect(() => {
          getFile();
        }, []);

        return (
            <>
            <div className="fileContent">
               {file.map((e) => (
          <ClickedFileContent key={e.id} item={e} />
        ))} 
        
            </div>
            <div>MErge</div>
            </>
        )
}

export default ClickedFile;