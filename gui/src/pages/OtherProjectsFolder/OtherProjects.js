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
import OtherProject from "./OtherProject"
const SERVER = "http://localhost:8080/";

const OtherProjects=()=>{
    const [users, setUsers] = useState([]);
    const [projects, setProjects] = useState([]);

    let { id } = useParams();
    const idFinal = id.split(":");

    const getProjects = () => {
        Axios.get(`http://localhost:8080/api/${idFinal[1]}/otherprojects`, {
          params: { id: idFinal[1] },
        }).then((response) => {
          setProjects(response.data);
        });
      };

      useEffect(() => {
        getProjects();
      }, []);

      return (
        <>
          <div className="project-list">
            {projects.map((e) => (
              <OtherProject key={e.id} item={e} />
            ))}
          </div>
          {/* <div>Merge</div> */}
        </>
      );
    
}

export default OtherProjects;