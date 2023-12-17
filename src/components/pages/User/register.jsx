import { useState } from "react";
import Button from "../../Elements/Button/Button";
import Input from "../../Elements/Input/index";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Fragments/navBarUser";
import Select from "../../Elements/Select/Select";

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
      <Navbar />
      <div className="flex flex-col justify-center mt-5 mx-auto min-h-screen text-black gap-y-7 sm:w-1/2 xl:w-1/4">
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
            <Select></Select>
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
          <div className="flex justify-center items-center">
            <p className="text-xl">
              have account ? <Link to={"/"}>Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
