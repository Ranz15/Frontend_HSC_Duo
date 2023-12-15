import { useEffect, useState } from "react";
import Input from "../../../Elements/Input";
import Select from "../../../Elements/Select/Select";
import Button from "../../../Elements/Button/Button";
import axios from "axios";
import Navbar from "../../../Fragments/navBarAdmin";
import { useNavigate, useParams } from "react-router-dom";

const CreateProduct = () => {
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
    category_name: "",
    category_name: "",
    category_name: "",
    category_name: "",
    category_name: "",
    category_name: "",
    category_name: "",
    category_name: "",
  });

  const { id } = useParams();
  console.log(id);

  const navigate = useNavigate();

  const bodyParameters = {
    name_category: data.category_name,
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
          import.meta.env.VITE_API_Category + "/create",
          bodyParameters,
          config
        )
        .then(function (response) {
          console.log(response);
          navigate("/admin/category/list");
        })
        .catch(function (error) {
          console.log(error.response.data.message);
        });
    } else {
      // API PATCH DATA
      axios
        .patch(
          import.meta.env.VITE_API_Category + "/" + id,
          bodyParameters,
          config
        )
        .then(function (response) {
          console.log(response);
          navigate("/admin/category/list");
        })
        .catch(function (error) {
          console.log(error.response.data.message);
        });
    }
  };

  const handleUpdate = (e) => {
    // API GET DATA
    axios
      .get(import.meta.env.VITE_API_Category + "/" + id)
      .then(function (response) {
        setData({
          ...data,
          category_name: response.data.data.categoryName,
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

  console.log(data);

  return (
    <>
      <Navbar />

      <div
        className="flex gap-5 justify-center min-h-screen items-center"
        data-theme="valentine"
      >
        <div className="p-5 rounded-md outline outline-4 outline-slate-300 shadow-xl">
          <h1 className="text-black text-3xl font-bold border-b-2 pb-3 text-center">
            {id === "new" ? "Tambah Data Product" : "Update Data Product"}
          </h1>
          <Input
            type="text"
            label="Product Name"
            name="category_name"
            value={data.category_name}
            onChange={handleChange}
            inputText="text-black"
          />
          <Input
            type="text"
            label="Category Name"
            name="category_name"
            value={data.category_name}
            onChange={handleChange}
            inputText="text-black"
          />
          <Input
            type="text"
            label="Seller Name"
            name="seller_name"
            value={data.category_name}
            onChange={handleChange}
            inputText="text-black"
          />
          <Input
            type="text"
            label="Price"
            name="price"
            value={data.category_name}
            onChange={handleChange}
            inputText="text-black"
          />
          <Input
            type="text"
            label="description"
            name="description"
            value={data.category_name}
            onChange={handleChange}
            inputText="text-black"
          />
          <Input
            type="text"
            label="Stock"
            name="stock"
            value={data.category_name}
            onChange={handleChange}
            inputText="text-black"
          />
          <Input
            type="file"
            label="Thumbnail"
            name="thumbnail"
            value={data.category_name}
            onChange={handleChange}
            inputText="text-black"
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

export default CreateProduct;
