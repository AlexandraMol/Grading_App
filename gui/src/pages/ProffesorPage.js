import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { useNavigate } from "react-router";

const ProffesorPage= () => {
    const navigate = useNavigate();
    let { id } = useParams();
    const idFinal = id.split(":");

    return (
        <>
        <div>Merge {idFinal}</div>

        <button
        onClick={() => {
          navigate(`/proffesorPage/students`);
        }}
      >
        Vizualizeaza studenti
      </button>
        </>
    )
}

export default ProffesorPage;