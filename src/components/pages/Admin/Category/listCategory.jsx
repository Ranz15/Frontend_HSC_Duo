import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../../../Fragments/navBarAdmin";
import Button from "../../../Elements/Button/Button";
import { useNavigate } from "react-router-dom";
import { data } from "autoprefixer";

const ListCategory = () => {
  const [dataCategory, setDataCategory] = useState();
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
        import.meta.env.VITE_API_Category + "/all",
        config
      );

      if (data) {
        setDataCategory(data);
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
        import.meta.env.VITE_API_Category + "/" + id,
        config
      );
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(dataCategory);

  return (
    <>
      <Navbar />

      <div className="overflow-x-auto mt-10">
        <div>
          <Button
            btnUI="btn-primary"
            onClick={() => navigate("/admin/category/new")}
          >
            New Data
          </Button>
        </div>
        <table className="table text-center">
          {/* head */}
          <thead className="text-lg font-extrabold text-black">
            <tr>
              <th>No</th>
              <th>Category Name</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody className="text-xs">
            {isLoading ? <div>Data sedang dimuat</div> : <></>}
            {dataCategory && isLoading === false ? (
              <>
                {dataCategory.data.map((item, key) => {
                  return (
                    <tr className="hover" key={item.id}>
                      <th>{key + 1}</th>
                      <td>{item.categoryName}</td>
                      <td>
                        <Button
                          btnUI="btn-info"
                          onClick={() => navigate(`/admin/category/${item.id}`)}
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

export default ListCategory;
