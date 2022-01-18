import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container">
      <p>Page not found!</p>
      <Link to={"/"}>Go to homepage</Link>
    </div>
  );
};

export default NotFound;
