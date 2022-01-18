import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";

function StudentProject(props) {
  const { item } = props;
  let { idStudent } = useParams();

  const navigate = useNavigate();

  return (
    <>
      <div className="container-project">
        <button
          className="btnTitle"
          onClick={() => {
            navigate(
              `/proffesorPage/students/${idStudent}/projects/${item.id}/files`
            );
          }}
        >
          {item.title}
        </button>
        <p className="projectContent">
          <b>Numele echipei:</b>
          <br></br> {item.teamName}
        </p>
        <p className="projectContent">
          <b>Video link:</b>
          <br></br>
          {item.videoLink}
        </p>

        <br></br>
      </div>
    </>
  );
}

export default StudentProject;
