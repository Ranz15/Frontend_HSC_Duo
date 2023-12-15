import { useEffect, useState } from "react";
import Input from "../../../Elements/Input";
import Select from "../../../Elements/Select/Select";
import Button from "../../../Elements/Button/Button";
import axios from "axios";
import Navbar from "../../../Fragments/navBarAdmin";
import { useNavigate, useParams } from "react-router-dom";

const CreateSeller = () => {
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
    gender: false,
    phone: "",
  });

  const { id } = useParams();
  console.log(id);

  const navigate = useNavigate();

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

    if (id === "new") {
      // API Post Data
      axios
        .post(
          import.meta.env.VITE_API_Seller + "/create",
          bodyParameters,
          config
        )
        .then(function (response) {
          console.log(response);
          navigate("/admin/list");
        })
        .catch(function (error) {
          console.log(error.response.data.message);
        });
    } else {
      // API PUT DATA
      axios
        .patch(
          import.meta.env.VITE_API_Seller + "/" + id,
          bodyParameters,
          config
        )
        .then(function (response) {
          console.log(response);
          navigate("/admin/list");
        })
        .catch(function (error) {
          console.log(error.response.data.message);
        });
    }
  };

  const handleUpdate = (e) => {
    // API GET DATA
    axios
      .get(import.meta.env.VITE_API_Seller + "/" + id)
      .then(function (response) {
        setData({
          ...data,
          fullname: response.data.data.fullName,
          dob: response.data.data.dateofBirth,
          address: response.data.data.address,
          username: response.data.data.username,
          email: response.data.data.email,
          password: response.data.data.password,
          gender: response.data.data.gender,
          phone: response.data.data.phone_number,
        });
        console.log(response);
      });
  };

  useEffect(() => {
    if (id) {
      handleUpdate();
    } else {
      handleSubmit();
    }
  }, [id]);

  return (
    <>
      <Navbar />

      <div
        className="flex gap-5 justify-center min-h-screen items-center"
        data-theme="valentine"
      >
        <div className="p-5 rounded-md outline outline-4 outline-slate-300 shadow-xl">
          <h1 className="text-black text-3xl font-bold border-b-2 pb-3 text-center">
            {id === "new" ? "Tambah Data Admin" : "Update Data Admin"}
          </h1>
          <Input
            type="text"
            label="Full Name"
            name="fullname"
            value={data.fullname}
            onChange={handleChange}
            inputText="text-black"
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
            <Button type="submit" onClick={handleSubmit} width="w-full">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateSeller;
