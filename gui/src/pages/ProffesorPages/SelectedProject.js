import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";

function StudentProject(props) {
  const { item } = props;
  let { idStudent } = useParams();

  const navigate = useNavigate();

  return (
    <div className="project">
      <div>Proiectul cu numarul {item.id}</div>
      <button
        className="title"
        onClick={() => {
          navigate(
            `/proffesorPage/students/${idStudent}/projects/${item.id}/files`
          );
        }}
      >
        {item.title}
      </button>
      <div className="teamName">{item.teamName}</div>
      <div className="videoLink">{item.videoLink}</div>

      <br></br>
    </div>
  );
}

export default StudentProject;
