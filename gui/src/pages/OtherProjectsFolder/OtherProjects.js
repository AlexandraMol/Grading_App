import React from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { useState, useEffect } from "react";
import OtherProject from "./OtherProject";

const OtherProjects = () => {
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
        {projects.map((project) => (
          <OtherProject key={project.id} item={project} />
        ))}
      </div>
    </>
  );
};

export default OtherProjects;
