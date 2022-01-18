import React from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { useState, useEffect } from "react";
import SelectedFileContent from "./SelectedFileContent";

const SelectedFile = () => {
  const [file, setFile] = useState([]);

  let { id, idProject, idFile } = useParams();
  async function getFile() {
    const res = await Axios.get(
      `http://localhost:8080/api/${id}/myprojects/${idProject}/files/${idFile}`
    );
    const { data } = await res;
    setFile(data);
  }

  useEffect(() => {
    getFile();
  }, []);

  return (
    <>
      <div className="fileContent">
        {file.map((e) => (
          <SelectedFileContent key={e.id} item={e} />
        ))}
      </div>
    </>
  );
};
export default SelectedFile;
