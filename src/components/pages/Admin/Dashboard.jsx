import { useNavigate } from "react-router-dom";
import Button from "../../Elements/Button/Button";
import Navbar from "../../Fragments/navBarAdmin";

const Dashboard = () => {
  const token = localStorage.getItem("token");
  console.log(token);

  return (
    <>
      <Navbar />
      <div className="container mx-5">
        <h1>Welcome to Dashboard Admin</h1>
      </div>
    </>
  );
};

export default Dashboard;
