import { useNavigate } from "react-router";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function OtherProject(props){
    const { item } = props;
    let { id } = useParams();
    const idFinal = id.split(":");
    console.log(id);
    const navigate = useNavigate();

    return(
        <div className="project">
            <div>Proiectul cu numarul {item.id}</div>
            <button
            className="title"
            onClick={()=>{navigate(`/studentPage/${id}/otherprojects/${item.id}`)}}
            > {item.title}</button>
            <div className="teamName">{item.teamName}</div>
            <div className="videoLink">{item.videoLink}</div>
            <br></br>
        </div>
    )
}

export default OtherProject;