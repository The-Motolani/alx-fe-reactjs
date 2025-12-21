import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("isAuth", "true");
    navigate("/profile");
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Log in</button>
    </div>
  );
};

export default Login;
