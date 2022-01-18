import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";

function OtherFile(props) {
  let { id, idProject } = useParams();
  const idStudentFinal = id.split(":");

  const { item } = props;
  const navigate = useNavigate();

  return (
    <div className="file">
      <button
        className="btnStudentPage"
        style={{ marginBottom: "2em", height: "40px" }}
        onClick={() => {
          navigate(
            `/studentPage/${idStudentFinal[1]}/otherprojects/${idProject}/files/${item.id}`
          );
        }}
      >
        {item.fileName}
      </button>

      <br></br>
    </div>
  );
}

export default OtherFile;
