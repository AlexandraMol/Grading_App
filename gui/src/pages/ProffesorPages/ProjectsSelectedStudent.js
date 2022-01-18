import React from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { useState, useEffect } from "react";
import SelectedProject from "./SelectedProject";

const ProjectsSelectedStudent = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();
  let { idStudent } = useParams();

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

  return (
    <div className="project-list">
      <button
        id="btnBackHome"
        onClick={() => {
          navigate(`/proffesorPage/students`);
        }}
      >
        Go back
      </button>
      <div>
        {projects.map((e) => (
          <SelectedProject key={e.id} item={e} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSelectedStudent;
