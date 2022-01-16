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
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
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
      navigate(`/studentPage/${id}/otherprojects/${item.id}`);
    } else {
      toast("Nu mai poti vota!");
    }
  };

  return (
    <div className="project" id="project">
      <div>Proiectul cu numarul {item.id}</div>
      <button className="title" onClick={checkTime}>
        {item.title}
      </button>
      <ToastContainer />
      <div className="teamName">{item.teamName}</div>
      <div className="videoLink">{item.videoLink}</div>

      <div className="grade">Deadline acordare nota:</div>
      <p>
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </p>

      <br></br>
    </div>
  );
}

export default OtherProject;
