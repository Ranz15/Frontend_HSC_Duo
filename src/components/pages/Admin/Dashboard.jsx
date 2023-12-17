import { useNavigate } from "react-router-dom";
import Button from "../../Elements/Button/Button";
import Navbar from "../../Fragments/navBarAdmin";

const Dashboard = () => {
  const token = localStorage.getItem("token");
  const nameLogin = localStorage.getItem("name");
  // console.log(token);

  return (
    <>
      <Navbar />
      <div className="container mx-5">
        <h1>
          Hay <span className="font-bold text-lg">{`${nameLogin}`}</span>,
          Welcome to Dashboard Admin
        </h1>
      </div>
    </>
  );
};

export default Dashboard;
