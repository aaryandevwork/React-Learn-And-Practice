import { useContext } from "react";
import { Navigate, Outlet } from "react-router"
import { AuthStore } from "../context/AuthContext";

const ProtectedRoutes = () => {
    let {loggedUser} = useContext(AuthStore);

    if(!loggedUser){
        return <Navigate to={"/"} />
    }

    return(
        <Outlet />
    )
}

export default ProtectedRoutes;