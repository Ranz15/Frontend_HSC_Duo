import { useState } from "react";
import Input from "../../Elements/Input";
import Select from "../../Elements/Select/Select";
import Button from "../../Elements/Button/Button";
import axios from "axios";

const Create = () => {
  // useState
  // Cara 1
  // const [fullname, setFullName] = useState("");
  // const [dob, setDOB] = useState("");
  // const [address, setAddress] = useState("");
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [gender, setGender] = useState("");
  // const [phone_number, setPhoneNumber] = useState("");

  // Cara 2
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

  const bodyParameters = {
    fullname: data.fullname,
    dob: data.dob,
    address: data.address,
    username: data.username,
    email: data.email,
    password: data.password,
    gender: data.gender,
    phone: data.phone,
  };

  const auth = localStorage.getItem("token");

  const config = {
    headers: { Authorization: `Bearer ${auth}` },
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    // Debug
    // e.preventDefault();
    // console.log(data);

    // API Post Data
    axios
      .post("http://localhost:3030/seller/create", bodyParameters, config)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error.response.data.message);
      });
  };

  return (
    <>
      <div className="flex gap-5 justify-center bg-gray-700 min-h-screen items-center">
        <div className="bg-slate-400 p-10 rounded-md">
          <h1 className="text-white text-3xl font-bold border-b-2 pb-3 text-center">
            Create Data Admin
          </h1>
          <Input
            type="text"
            label="Full Name"
            name="fullname"
            value={data.fullname}
            onChange={handleChange}
          />
          <Input
            type="date"
            label="Date of Birth"
            name="dob"
            value={data.dob}
            onChange={handleChange}
          />
          <Input
            type="text"
            label="Address"
            name="address"
            value={data.address}
            onChange={handleChange}
          />
          <Input
            type="text"
            label="Username"
            name="username"
            value={data.username}
            onChange={handleChange}
          />
          <Input
            type="email"
            label="Email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
          <Input
            type="password"
            label="Password"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
          <Select
            label="Gender"
            name="gender"
            value={0}
            value2={1}
            onChange={handleChange}
          />

          <Input
            type="number"
            label="Phone Number"
            name="phone"
            value={data.phone}
            onChange={handleChange}
          />

          <div className="flex justify-center mt-2">
            <Button type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
