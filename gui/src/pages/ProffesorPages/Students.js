import React from "react";
import { useNavigate } from "react-router";
import Axios from "axios";
import { useState, useEffect } from "react";
import Student from "./Student";
import { useParams } from "react-router-dom";
const Students = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();
  let { id } = useParams();
  console.log(id);
  const getProjects = () => {
    Axios.get(`http://localhost:8080/api/students`).then((response) => {
      setStudents(response.data);
    });
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      <button
        id="btnBackHome"
        onClick={() => {
          navigate(`/proffesorPage/${id}`);
        }}
      >
        Go back
      </button>

      <div className="student-list">
        {students.map((e) => (
          <Student key={e.id} item={e} />
        ))}
      </div>
    </>
  );
};

export default Students;
