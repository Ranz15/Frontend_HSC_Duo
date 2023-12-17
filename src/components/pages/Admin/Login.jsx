import { useState } from "react";
import Button from "../../Elements/Button/Button";
import Input from "../../Elements/Input/index";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginAdmin = () => {
  const [dataLogin, setDataLogin] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setDataLogin({
      ...dataLogin,
      [e.target.name]: e.target.value,
    });
  };

  const LoginAdmin = () => {
    axios
      .post(import.meta.env.VITE_API_Login + "/seller", {
        username: dataLogin.username,
        password: dataLogin.password,
      })
      .then(function (response) {
        console.log(response);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("name", response.data.userData.fullName);
        localStorage.setItem("id", response.data.userData.id);
        navigate("/admin/dashboard");
      })
      .catch(function (error) {
        console.log(error.response.data.message);
        setError(error.response.data.message);
      });
  };

  // console.log(dataLogin);

  return (
    <>
      <main className="flex justify-center items-center h-screen bg-gray-400">
        <div className="text-base w-96 p-5 bg-slate-100 rounded-md">
          {/* Tampilan Logo */}
          <div className="flex items-center justify-center mb-4">
            <img
              src="../../../../public/Images/Logo/H_M_Logo.png"
              alt="Logo H&M"
              width="100"
            />
          </div>
          {error ? (
            <>
              <div className="bg-red-500 text-center py-1 w-full mb-4">
                {/* Menampilkan pesan error */}
                <p className="text-white">{error}</p>
              </div>
            </>
          ) : (
            <></>
          )}

          <div className="flex flex-col gap-3">
            <Input
              label="Username"
              name="username"
              onChange={handleChange}
              type="text"
              value={dataLogin.username}
              inputBg="bg-slate-100"
            />

            <Input
              label="Password"
              name="password"
              onChange={handleChange}
              type="password"
              value={dataLogin.password}
              inputBg="bg-slate-100"
            />
          </div>
          <div className="my-5">
            <Button
              width="w-full"
              Bgcolor="btn btn-primary"
              onClick={LoginAdmin}
            >
              Login
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default LoginAdmin;
