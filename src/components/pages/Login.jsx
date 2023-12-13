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

  const onRegister = () => {
    return navigate("/register");
  };

  return (
    <>
      <div className="flex flex-col justify-center min-h-screen text-black mx-5 gap-y-7">
        <div className="">
          <h1 className="text-3xl font-bold mb-2">Login</h1>
          <p className="font-medium ">Welcome, Please enter your details</p>
        </div>
        <div className="gap-y-5">
          <div className="mb-5">
            <Input
              label="Email"
              name="email"
              type="email"
              value={username}
              onChange={handleChange}
            />
          </div>
          <div className="mb-10">
            <Input
              label="Password"
              name="password"
              type="password"
              value={password}
              onChange={handleChangePassword}
            />
          </div>

          <div className="flex flex-col">
            <Button onClick={onLogin} width={"w-full"}>
              Login
            </Button>
            <div className="flex justify-center items-center gap-3  ">
              <span className="w-full h-[2px]  bg-black"></span>
              <p>OR</p>
              <span className="w-full h-[2px]  bg-black"></span>
            </div>
            <Button onClick={onRegister} width={"w-full"}>
              Register
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
