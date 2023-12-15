import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../../../Fragments/navBarAdmin";
import { data } from "autoprefixer";
import Button from "../../../Elements/Button/Button";
import { useNavigate } from "react-router-dom";

const ListSeller = () => {
  const [dataSeller, setDataSeller] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const auth = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${auth}` },
  };

  // Call API Select (GET)
  const getData = async () => {
    try {
      const { data } = await axios.get(
        import.meta.env.VITE_API_Seller + "/all"
      );

      if (data) {
        setDataSeller(data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // CRUD LOGIC
  const deleteData = async (id) => {
    try {
      const { data } = await axios.delete(
        import.meta.env.VITE_API_Seller + "/" + id,
        config
      );
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="overflow-x-auto mt-10">
        <div>
          <Button
            btnUI="btn-primary"
            onClick={() => navigate("/admin/seller/new")}
          >
            New Data
          </Button>
        </div>
        <table className="table text-center">
          {/* head */}
          <thead className="text-lg font-extrabold text-black">
            <tr>
              <th>No</th>
              <th>Full Name</th>
              <th>Date of Birth</th>
              <th>Address</th>
              <th>Username</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Phone</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody className="text-xs">
            {isLoading ? <div>Data sedang dimuat</div> : <></>}
            {dataSeller && isLoading === false ? (
              <>
                {dataSeller.data.map((item, key) => {
                  return (
                    <tr className="hover" key={item.id}>
                      <th>{key + 1}</th>
                      <td>{item.fullName}</td>
                      <td>{item.dateofBirth}</td>
                      <td>{item.address}</td>
                      <td>{item.username}</td>
                      <td>{item.email}</td>
                      <td>{item.gender === false ? "Male" : "Female"}</td>
                      <td>{item.phone_number}</td>
                      <td>
                        <Button
                          btnUI="btn-info"
                          onClick={() => navigate(`/admin/seller/${item.id}`)}
                        >
                          Edit
                        </Button>
                      </td>
                      <td>
                        <Button
                          btnUI="btn-error"
                          onClick={() => deleteData(item.id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </>
            ) : (
              <>tidak ada data</>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListSeller;
