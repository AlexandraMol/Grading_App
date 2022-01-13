import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <p>Aplicatie de acordat note</p>

      <button
        onClick={() => {
          navigate("/register");
        }}
      >
        Register
      </button>

      <button
        onClick={() => {
          navigate("/login");
        }}
      >
        Login
      </button>
    </>
  );
};

export default Home;
