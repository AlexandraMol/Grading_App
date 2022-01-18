import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";

function ProjectFile(props) {
  let { idStudent, projectId } = useParams();

  const { item } = props;
  const navigate = useNavigate();
  return (
    <>
      <button
        id="btnBackHome"
        onClick={() => {
          navigate(`/proffesorPage/students/${idStudent}/projects`);
        }}
      >
        Go back
      </button>
      <div className="file">
        <button
          className="btnStudentPage"
          style={{ marginBottom: "2em", height: "40px" }}
          onClick={() => {
            navigate(
              `/proffesorPage/students/${idStudent}/projects/${projectId}/files/${item.id}`
            );
          }}
        >
          {item.fileName}
        </button>

        <br></br>
      </div>
    </>
  );
}

export default ProjectFile;
