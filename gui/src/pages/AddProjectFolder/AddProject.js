import Axios from "axios";
import { useNavigate } from "react-router";
import React, { useState, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
const SERVER = "http://localhost:8080/";

const AddProject = () => {
  const { id } = useParams();
  const idFinal = id.split(":");
  const [title, setTitle] = useState("");
  const [teamName, setTeamName] = useState("");
  const [videoLink, setVideoLink] = useState("");

  const addVideo = () => {
    Axios.post(`http://localhost:8080/api/${idFinal[1]}/myprojects`, {
      title: title,
      teamName: teamName,
      videoLink: videoLink,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="adding-project">
      <h2 className="title">Project title: </h2>
      <input
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      ></input>
      <h2 className="teamName">Team name:</h2>
      <input
        type="text"
        onChange={(e) => {
          setTeamName(e.target.value);
        }}
      ></input>
      <h2 className="videoLink">Video link:</h2>
      <input
        type="text"
        onChange={(e) => {
          setVideoLink(e.target.value);
        }}
      ></input>
      <button type="button" onClick={addVideo}>
        Add project
      </button>
    </div>
  );
};

export default AddProject;
