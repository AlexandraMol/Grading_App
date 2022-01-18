import React from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { useState, useEffect, useRef } from "react";
import MyFile from "./MyFile";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SelectedProject = () => {
  const navigate = useNavigate();
  const [filename, setFileName] = useState("");
  const [file, setFile] = useState("");
  const [files, setFiles] = useState([]);

  let { id, idProject } = useParams();
  const idStudentFinal = id.split(":");

  const getFiles = () => {
    Axios.get(
      `http://localhost:8080/api/${idStudentFinal[1]}/myprojects/${idProject}/files`,
      { params: { idProject: idProject } }
    ).then((response) => {
      setFiles(response.data);
    });
  };

  useEffect(() => {
    getFiles();
  }, []);

  const addFile = () => {
    if (filename === "" && file === "") {
      toast.error("Nu ai introdus datele!");
    } else if (filename === "") {
      toast.error("Nu ai introdus numele fisierului!");
    } else if (file === "") {
      toast.error("Nu ai introdus continutul fisierului!");
    } else {
      Axios.post(
        `http://localhost:8080/api/${id}/myprojects/${idProject}/addFile`,
        {
          fileName: filename,
          file: file,
        }
      ).then((response) => {
        console.log(response);
      });

      getFiles();
      const form = document.getElementById("formAddFile");
      const btnAdd = document.getElementById("btnAddNewFile");
      const fileList = document.getElementById("fileList");
      const container = document.getElementById("container-fisiere");
      form.style.display = "none";
      btnAdd.style.display = "block";
      btnAdd.style.margin = "0 auto";
      fileList.style.display = "block";
      container.style.display = "block";
    }
  };

  const showForm = () => {
    const form = document.getElementById("formAddFile");
    const btnAdd = document.getElementById("btnAddNewFile");
    const fileList = document.getElementById("fileList");
    const container = document.getElementById("container-fisiere");
    btnAdd.style.display = "none";
    form.style.display = "block";
    fileList.style.display = "none";
    container.style.display = "none";
  };

  return (
    <>
      <button
        id="btnBackHome"
        onClick={() => {
          navigate(`/studentPage/${id}/myprojects`);
        }}
      >
        Go back
      </button>
      <ToastContainer
        className="toast"
        position="top-right"
        autoClose={3000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover={false}
      />
      <div id="formAddFile" className="container" style={{ display: "none" }}>
        <p style={{ marginTop: "-2em" }}>File name:</p>
        <input
          type="text"
          placeholder="File name"
          className="fileContent"
          onChange={(e) => {
            setFileName(e.target.value);
          }}
        ></input>
        <p>Introdu continutul fisierului:</p>
        <textarea
          id="fileContent"
          type="text"
          className="fileContent"
          placeholder="File content"
          onChange={(e) => {
            setFile(e.target.value);
          }}
        ></textarea>
        <br></br>
        <button
          type="button"
          className="btnLogin"
          style={{ marginTop: "-2em" }}
          onClick={addFile}
        >
          Add file
        </button>
      </div>
      <div id="container-fisiere">
        <button onClick={showForm} id="btnAddNewFile">
          Adauga un nou fisier
        </button>

        <div id="fileList">
          {files.map((e) => (
            <MyFile key={e.id} item={e} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SelectedProject;
