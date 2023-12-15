import { useNavigate } from "react-router-dom";
import Button from "../Elements/Button/Button";
import NavCategory from "../Fragments/hamburgerMenu";

const Dashboard = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  console.log(token);

  const Logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <NavCategory />
      <h1>Welcome to Dashboard</h1>
      <Button onClick={Logout}>Logout </Button>
    </>
  );
};

export default Dashboard;
