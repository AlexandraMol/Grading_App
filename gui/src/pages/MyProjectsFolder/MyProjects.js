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
import MyProject from "./MyProject";
const SERVER = "http://localhost:8080/";

const MyProjects = () => {
  const [projects, setProjects] = useState([]);

  let { id } = useParams();
  const idFinal = id.split(":");

  const getProjects = () => {
    Axios.get(`http://localhost:8080/api/${idFinal[1]}/myprojects`, {
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
          <MyProject key={e.id} item={e} />
        ))}
      </div>
    </>
  );
};

export default MyProjects;
