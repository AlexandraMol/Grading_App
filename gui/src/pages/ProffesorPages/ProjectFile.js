import { useNavigate } from "react-router";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function ProjectFile(props) {

    let {idStudent,projectId}=useParams();

    const {item}=props;
    const navigate = useNavigate();
    return(
        <div className="file">

           <div>Fisierul numarul {item.id}</div>
      <button
        className="fileName"
        onClick={() => {
          navigate(
            `/proffesorPage/students/${idStudent}/projects/${projectId}/files/${item.id}`
          );
        }}
      >
        {item.fileName}
      </button>
      <div className="file">{item.file}</div>
      <br></br>
            
        </div>
    )
}

export default ProjectFile;