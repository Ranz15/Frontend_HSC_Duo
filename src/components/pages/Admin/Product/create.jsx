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
    product_name: "",
    category_id: "",
    seller_id: "",
    price: "",
    description: "",
    stock: "",
    thumbnail: "",
  });

  const [dataCategory, setDataCategory] = useState();
  const [dataSeller, setDataSeller] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();
  console.log(id);

  const navigate = useNavigate();

  const bodyParameters = {
    name_product: data.product_name,
    category_id: data.category_id,
    seller_id: data.seller_id,
    price: data.price,
    description: data.description,
    stock: data.stock,
    thumbnail: data.thumbnail,
  };

  const auth = localStorage.getItem("token");

  const config = {
    headers: { Authorization: `Bearer ${auth}` },
  };

  const getDataCategory = async () => {
    try {
      const { data } = await axios.get(
        import.meta.env.VITE_API_Category + "/all",
        config
      );

      if (data) {
        setDataCategory(data.data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getDataSeller = async () => {
    try {
      const { data } = await axios.get(
        import.meta.env.VITE_API_Seller + "/all"
      );

      if (data) {
        setDataSeller(data.data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
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
          import.meta.env.VITE_API_Product + "/create",
          bodyParameters,
          config
        )
        .then(function (response) {
          console.log(response);
          navigate("/admin/category/list");
        })
        .catch(function (error) {
          alert(error.response.data.message);
        });
    } else {
      // API PATCH DATA
      axios
        .patch(
          import.meta.env.VITE_API_Product + "/" + id,
          bodyParameters,
          config
        )
        .then(function (response) {
          console.log(response);
          navigate("/admin/category/list");
        })
        .catch(function (error) {
          alert(error.response.data.message);
        });
    }
  };

  // API GET DATA
  const handleUpdate = (e) => {
    axios
      .get(import.meta.env.VITE_API_Product + "/" + id)
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
    getDataSeller();
    getDataCategory();
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
            name="product_name"
            value={data.product_name}
            onChange={handleChange}
            inputText="text-black"
          />
          <div>
            <label className="form-control w-full max-w-xs mb-2">
              <div className="label">
                <span className="label-text">Category Name</span>
              </div>
              <select
                className="select bg-white"
                name="category_id"
                onChange={handleChange}
              >
                <option disabled selected>
                  Pick one
                </option>
                {dataCategory?.map((item, key) => {
                  return (
                    <>
                      <option key={key} value={item.id}>
                        {item.categoryName}
                      </option>
                    </>
                  );
                })}
              </select>
            </label>
          </div>

          <div>
            <label className="form-control w-full max-w-xs mb-2">
              <div className="label">
                <span className="label-text">Seller Name</span>
              </div>
              <select
                className="select bg-white"
                name="seller_id"
                onChange={handleChange}
              >
                <option disabled selected>
                  Pick one
                </option>
                {dataSeller?.map((item, key) => {
                  return (
                    <>
                      <option key={key} value={item.id}>
                        {item.fullName}
                      </option>
                    </>
                  );
                })}
              </select>
            </label>
          </div>

          <Input
            type="text"
            label="Price"
            name="price"
            value={data.price}
            onChange={handleChange}
            inputText="text-black"
          />
          <Input
            type="text"
            label="description"
            name="description"
            value={data.description}
            onChange={handleChange}
            inputText="text-black"
          />
          <Input
            type="text"
            label="Stock"
            name="stock"
            value={data.stock}
            onChange={handleChange}
            inputText="text-black"
          />
          <Input
            type="file"
            label="Thumbnail"
            name="thumbnail"
            value={data.thumbnail}
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
