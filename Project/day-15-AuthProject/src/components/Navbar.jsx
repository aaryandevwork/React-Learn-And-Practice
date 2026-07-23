import { NavLink, useLocation, useNavigate } from "react-router";
import { AuthStore } from "../context/AuthContext";
import { useContext } from "react";

const Navbar = () => {
  let { setLoggedUser } = useContext(AuthStore);
  let navigate = useNavigate();

  function logOut() {
    setLoggedUser(null);
    localStorage.removeItem("loggedInUser");
    navigate("/");
  }

  return (
    <div className="border-r border-gray-500 p-3 flex flex-col justify-between">
      <div className="flex flex-col  gap-10">
        <h1 className="text-3xl font-semibold">E-comm</h1>

        <div className="flex flex-col gap-6 ml-5">
          <NavLink
            to={"/main"}
            end
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-red-500 border-b border-gray-500"
                : "text-black border-b border-gray-500"
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/main/users"}
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-red-500 border-b border-gray-500"
                : "text-black border-b border-gray-500"
            }
          >
            Users
          </NavLink>
          <NavLink
            to={"/main/products"}
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-red-500 border-b border-gray-500"
                : "text-black border-b border-gray-500"
            }
          >
            Products
          </NavLink>
        </div>
      </div>

      <button
        onClick={logOut}
        className="py-3 bg-red-600 text-white rounded cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
