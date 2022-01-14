import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Axios from "axios";
import { useState, useEffect, useRef } from "react";
import Student from "./Student"
const SERVER = "http://localhost:8080/";

const Students = () => {
    const [students,setStudents] = useState([]);
   
    const getProjects = () => {
      Axios.get(`http://localhost:8080/api/students`).then((response) => {
        setStudents(response.data);
        console.log(response.data)
      });
      
    };

    
    useEffect(() => {
      getProjects();
    }, []);

    return(
      <>
       <div>Lista studenti:</div>
            <br></br>
      <div className="student-list">
        {students.map((e)=>(
          <Student key={e.id} item={e}/>
        ))}
        {/* merge */}
        
      </div>
      </>
    )
}

export default Students;