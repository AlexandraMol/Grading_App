import { useNavigate } from "react-router";

function Student(props) {
  const { item } = props;

  const navigate = useNavigate();

  return (
    <div className="container-student">
      <br></br>
      <div className="projectContent">
        <b>Emailul studentului:</b> {item.email}
      </div>

      <button
        className="btnTitle"
        onClick={() => {
          navigate(`/proffesorPage/students/${item.id}/projects`);
        }}
      >
        Vezi proiectele studentului
      </button>

      <br></br>
      <br></br>
    </div>
  );
}

export default Student;
