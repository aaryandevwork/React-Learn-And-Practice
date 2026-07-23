import { useContext } from "react";
import { Navigate, Outlet } from "react-router"
import { AuthStore } from "../context/AuthContext";

const PublicRoutes = () => {
    let {loggedUser} = useContext(AuthStore);

    if(loggedUser){
        return <Navigate to={"/main"} />
    }

    return(
        <Outlet />
    )
}

export default PublicRoutes;