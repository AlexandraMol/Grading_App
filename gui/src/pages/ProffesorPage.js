import React from "react";

import { useNavigate } from "react-router";

const ProffesorPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <button
        id="btnBackHome"
        onClick={() => {
          navigate(`/`);
        }}
      >
        Logout
      </button>
      <div className="container">
        <button
          className="btnStudentPage"
          style={{ marginTop: "11em" }}
          onClick={() => {
            navigate(`/proffesorPage/students`);
          }}
        >
          Vizualizeaza studenti
        </button>
      </div>
    </>
  );
};

export default ProffesorPage;
