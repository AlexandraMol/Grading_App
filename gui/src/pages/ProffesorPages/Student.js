import { useNavigate } from "react-router";

function Student(props) {
  const { item } = props;

  const navigate = useNavigate();

  return (
    <div className="container-project">
      <br></br>
      <div className="projectContent"> Emailul studentului: {item.email}</div>

      <button
        className="student"
        onClick={() => {
          navigate(`/proffesorPage/students/${item.id}/projects`);
        }}
      >
        Vezi proiectele studentului
      </button>

      <br></br>
    </div>
  );
}

export default Student;
