import { useState } from "react";
import Button from "../Elements/Button/Button";
import Input from "../Elements/Input/index";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [data, setData] = useState({
    fullname: "",
    dob: "",
    address: "",
    username: "",
    email: "",
    password: "",
    gender: "",
    phone: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const onRegister = () => {
    return navigate("/dashboard");
  };

  return (
    <>
      <div className="flex flex-col justify-center min-h-screen text-black mx-5 gap-y-7">
        <div className="">
          <h1 className="text-3xl font-bold mb-2">Register</h1>
          <p className="font-medium ">Welcome, Please enter your details</p>
        </div>
        <div className="gap-y-5">
          <div className="mb-5">
            <Input
              label="Name"
              name="name"
              type="text"
              value={data.username}
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <Input
              label="Birth"
              name="birth"
              type="date"
              value={data.dob}
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <Input
              label="Address"
              name="address"
              type="text"
              value={data.address}
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <Input
              label="Email"
              name="email"
              type="email"
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <Input
              label="Password"
              name="password"
              type="password"
              value={data.password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <Input
              label="Gender"
              name="gender"
              type="password"
              value={data.gender}
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <Input
              label="Phone"
              name="phone"
              type="text"
              value={data.phone}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <Button onClick={onRegister} width={"w-full"}>
              Register
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
