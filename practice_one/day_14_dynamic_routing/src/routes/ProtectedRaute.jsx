import { Navigate } from "react-router";


const ProtectedRaute = ({children}) => {
    let isAdmin = false;

    if(!isAdmin){
        console.log("Protected raute");
        return <Navigate to={"/"}/>
    }

    return children;
}

export default ProtectedRaute;