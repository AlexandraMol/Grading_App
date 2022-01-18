import React from "react";

import Axios from "axios";
import { useState, useEffect } from "react";
import Student from "./Student";

const Students = () => {
  const [students, setStudents] = useState([]);

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
      <br></br>
      <div className="student-list">
        {students.map((e) => (
          <Student key={e.id} item={e} />
        ))}
      </div>
    </>
  );
};

export default Students;
