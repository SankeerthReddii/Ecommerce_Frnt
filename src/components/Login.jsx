import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Ensure this imports the styles

const Login = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const navigate = useNavigate();

  const login = async () => {
    const res = await axios.post("http://localhost:9090/login", {
      username: ref1.current.value,
      password: ref2.current.value,
    });
    const { data } = res;
    const { login } = data;
    login == "success" ? navigate("/dashboard") : navigate("/error");
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <div className="input-group">
        <input
          type="text"
          ref={ref1}
          placeholder="Enter username"
          className="input-field"
        />
      </div>
      <div className="input-group">
        <input
          type="password"
          ref={ref2}
          placeholder="Enter password"
          className="input-field"
        />
      </div>
      <button onClick={login} className="login-button">
        Login
      </button>
    </div>
  );
};

export default Login;
