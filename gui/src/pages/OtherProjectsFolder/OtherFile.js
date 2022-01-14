import { useNavigate } from "react-router";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function OtherFile(props){
    let { id, idProject } = useParams();
    const idStudentFinal = id.split(":");

    const { item } = props;
    const navigate = useNavigate();

    return(
        <div className="file">
      <div>Fisierul numarul {item.id}</div>
      <button
        className="fileName"
        onClick={() => {
          navigate(
            `/studentPage/${idStudentFinal[1]}/otherprojects/${idProject}/files/${item.id}`
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

export default OtherFile;