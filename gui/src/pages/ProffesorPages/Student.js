import { useNavigate } from "react-router";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function Student(props){
    const { item } = props;
 
    const navigate = useNavigate();

    return(
        <div className="student">
           <br></br>
          <div>  Emailul studentului: {item.email}</div> 

          <button
        className="student"
        onClick={() => {
          navigate(`/proffesorPage/students/${item.id}/projects`);
        }}
      >
          Vezi proiectele studentului
      </button> 

        <br></br>
        </div>
        
    )
}

export default Student;