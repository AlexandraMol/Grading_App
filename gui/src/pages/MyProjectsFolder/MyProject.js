import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
function MyProject(props) {
  const { item } = props;
  let { id } = useParams();

  const navigate = useNavigate();
  return (
    <>
      <button
        id="btnBackHome"
        onClick={() => {
          navigate(`/studentPage/${id}`);
        }}
      >
        Go back
      </button>
      <div className="container-project">
        <button
          className="btnTitle"
          onClick={() => {
            navigate(`/studentPage/${id}/myprojects/${item.id}`);
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

export default MyProject;
