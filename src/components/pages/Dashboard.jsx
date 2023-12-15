import { useNavigate } from "react-router-dom";
import Button from "../Elements/Button/Button";
import Navbar from "../Fragments/Navbar";

const Dashboard = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  console.log(token);

  if (token === null) {
    navigate("/");
  }

  const Logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <h1>Welcome to Dashboard</h1>
      </div>
    </>
  );
};

export default Dashboard;
