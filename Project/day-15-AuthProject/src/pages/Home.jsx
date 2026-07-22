import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthStore } from "../context/AuthContext";

const Home = () => {
    let {setLoggedUser} = useContext(AuthStore);
    let navigate = useNavigate();

    function logOut(){
        setLoggedUser(null);
        navigate("/");
    }
    return(
        <div>
            <h1>This is home Broh</h1>
            <button onClick={logOut} className="rounded-lg bg-red-500 px-5 py-2.5 font-medium text-white transition hover:bg-red-600">
  Logout
</button>
        </div>
    )
}

export default Home;