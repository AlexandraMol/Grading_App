import React from "react";
import { useNavigate } from "react-router";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Axios from "axios";
import { useState, useEffect, useRef } from "react";
 import SelectedProject from "./SelectedProject";
const SERVER = "http://localhost:8080/";

const ProjectsSelectedStudent=()=> {
  const [projects, setProjects] = useState([]);


    
    let {idStudent}=useParams();
    console.log(idStudent);
    console.log("sda");

    // const navigate = useNavigate();

    const getProjects = () => {
      Axios.get(`http://localhost:8080/api/students/${idStudent}/projects`, {
        params: { id: idStudent },
      }).then((response) => {
        setProjects(response.data);
      });
    };
    useEffect(() => {
      getProjects();
    }, []);

    console.log(projects)

   

    return (
        <div className="project-list">

        <div>Lista de proiecte:</div>

        <div>

        {projects.map((e) => (
          <SelectedProject key={e.id} item={e} />
        ))}
        </div>



        </div>
    )
  
  

}

export default ProjectsSelectedStudent;