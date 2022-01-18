import { useNavigate } from "react-router";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function MyFile(props) {
  let { id, idProject } = useParams();
  const idStudentFinal = id.split(":");

  const { item } = props;
  const navigate = useNavigate();
  return (
    <>
      <button
        className="btnStudentPage"
        style={{ marginBottom: "2em", height: "40px" }}
        onClick={() => {
          navigate(
            `/studentPage/${idStudentFinal[1]}/myprojects/${idProject}/files/${item.id}`
          );
        }}
      >
        {item.fileName}
      </button>

      <br></br>
    </>
  );
}

export default MyFile;
