import React from "react";
import Axios from "axios";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import SelectedOtherFileContent from "./SelectedOtherFileContent";

const SelectedOtherFile = () => {
  const [file, setFile] = useState([]);
  const navigate = useNavigate();
  let { id, idProject, idFile } = useParams();

  async function getFile() {
    const res = await Axios.get(
      `http://localhost:8080/api/${id}/otherprojects/${idProject}/files/${idFile}`
    );
    const { data } = await res;
    setFile(data);
  }
  useEffect(() => {
    getFile();
  }, []);

  return (
    <>
      <button
        id="btnBackHome"
        onClick={() => {
          navigate(`/studentPage/:${id}/otherprojects/${idProject}`);
        }}
      >
        Go back
      </button>

      <div className="containerFinal">
        {file.map((e) => (
          <SelectedOtherFileContent key={e.id} item={e} />
        ))}
      </div>
    </>
  );
};

export default SelectedOtherFile;
