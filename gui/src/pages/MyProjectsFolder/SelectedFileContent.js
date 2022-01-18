import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";

const SelectedFileContent = (props) => {
  const { item } = props;
  let { id, idProject, idFile } = useParams();

  const navigate = useNavigate();
  return (
    <>
      <button
        id="btnBackHome"
        onClick={() => {
          navigate(`/studentPage/:${id}/myprojects/${idProject}`);
        }}
      >
        Go back
      </button>
      <div className="container-file">
        <br></br>
        <div id="title-file">
          <div>
            {" "}
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

export default SelectedFileContent;
