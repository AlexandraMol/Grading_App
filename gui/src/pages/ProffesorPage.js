import React from "react";

import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
const ProffesorPage = () => {
  const navigate = useNavigate();
  let { id } = useParams();
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
            navigate(`/proffesorPage/${id}/students`);
          }}
        >
          Vizualizeaza studenti
        </button>
      </div>
    </>
  );
};

export default ProffesorPage;
