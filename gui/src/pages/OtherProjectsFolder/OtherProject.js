import { useNavigate } from "react-router";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function OtherProject(props) {
  const { item } = props;
  let { id } = useParams();
  const idFinal = id.split(":");
  const navigate = useNavigate();

  const date = item.createdAt.split(" ");
  let secondDate = date[0].split(":");
  // console.log(dateMinutes);
  let hours = secondDate[0].slice(-2);
  //minutes secondDate[1]
  let seconds = secondDate[2].substring(0, 2);

  //console.log(hours, secondDate[1], seconds);
  var dateFinal = date[0].split("-");

  dateFinal[2] = parseInt(dateFinal[2].substring(0, 2) - 20).toString();

  // console.log(
  //   dateFinal[0],
  //   dateFinal[1],
  //   dateFinal[2],
  //   hours,
  //   secondDate[1],
  //   seconds
  // );
  //calculeaza minute si ore
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference =
      +new Date(
        dateFinal[0],
        dateFinal[1],
        dateFinal[2],
        hours,
        secondDate[1],
        seconds,
        0
      ) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        min: Math.floor((difference / 1000 / 60) % 60),
        sec: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  const checkTime = () => {
    if (timerComponents.length) {
      //sa generezi un numar aleator intre 0 si 1 si sa verifici. daca 0 inseamna ca nu esti in juriu si nu te duce la pagina
      //1 ar trebui sa te duca la pagina aia (linia)

      navigate(`/studentPage/${id}/otherprojects/${item.id}`);
    } else {
      toast("Nu mai poti vota!");
    }
  };

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
      <div className="container-project" id="project">
        <button className="btnTitle" onClick={checkTime}>
          {item.title}
        </button>
        <ToastContainer />
        <div className="projectContent">
          <b>Echipa: </b>
          <br></br>
          {item.teamName}
        </div>
        <div className="projectContent">
          <b>Video link: </b>
          <br></br>
          {item.videoLink}
        </div>

        <div className="projectContent">
          <b>Deadline acordare nota:</b>
        </div>
        <p className="projectContent">
          {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </p>

        <br></br>
      </div>
    </>
  );
}

export default OtherProject;
