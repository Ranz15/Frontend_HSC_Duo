import { useState } from "react";
import Button from "../Elements/Button/Button";
import Input from "../Elements/Input/index";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onLogin = () => {
    axios
      .post("http://localhost:3030/login/buyer", {
        username: username,
        password: password,
      })
      .then(function (response) {
        console.log(response.data.token);
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
      })
      .catch(function (error) {
        alert(error.response.data.message);
      });
  };

  return (
    <>
      <div className="flex gap-5 justify-center bg-blue-600 min-h-screen items-center">
        <div className="bg-slate-500 p-8">
          <h1 className="text-white text-3xl font-bold mb-2">Login</h1>
          <p className="font-medium text-white">
            Welcome, Please enter your details
          </p>
          <div className="mb-6">
            <Input
              label="Email"
              name="email"
              type="email"
              value={username}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <Input
              label="Password"
              name="password"
              type="password"
              value={password}
              onChange={handleChangePassword}
            />
          </div>
          <div className="mb-6">
            <Button onClick={onLogin}>Login</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
