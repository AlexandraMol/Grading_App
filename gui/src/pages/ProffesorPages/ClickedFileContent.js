import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";

const ClickedFileContent = (props) => {
  const { item } = props;

  const navigate = useNavigate();
  let { idStudent, projectId } = useParams();

  return (
    <>
      <button
        id="btnBackHome"
        onClick={() => {
          navigate(
            `/proffesorPage/students/${idStudent}/projects/${projectId}/files`
          );
        }}
      >
        Go back
      </button>

      <div className="container-file">
        <br></br>
        <div id="title-file">
          <div>
            <b>Titlu fisier: </b>
            {item.fileName}
          </div>
        </div>
        <br></br>
        <br></br>

        <br></br>
        <div id="content">
          <b>Continutul fisierului: </b>
          <br></br>
          <br></br>
          {item.file}
        </div>
      </div>
    </>
  );
};

export default ClickedFileContent;
