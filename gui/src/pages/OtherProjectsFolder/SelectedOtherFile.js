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
import SelectedOtherFileContent from "./SelectedOtherFileContent";

const SelectedOtherFile= () => {
    const [file,setFile] = useState([]);

    let { id, idProject, idFile } = useParams();
    console.log(id + " " + idProject + " " + idFile);
    async function getFile() {
      const res = await Axios.get(
        `http://localhost:8080/api/${id}/otherprojects/${idProject}/files/${idFile}`
      );
      const { data } = await res;
      setFile(data);
    }
    useEffect(() => {
        getFile();
      }, []);

      return(
          <div className="fileContent">
              {file.map((e) => (
          <SelectedOtherFileContent key={e.id} item={e} />
        ))}
          </div>
      )
}

export default SelectedOtherFile