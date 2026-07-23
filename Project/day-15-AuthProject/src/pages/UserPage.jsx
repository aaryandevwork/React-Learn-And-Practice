import axios from "axios";
import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import { axiosInstance } from "../config/axiosInstace";

const UserPage = () => {

    let [userData,setUserData] = useState([]);
    let [isLoading,setIsLoading] = useState(true);

    const getUserData = async () =>{
        try {
            // let res = await axios.get("https://fakestoreapi.com/users");
            let res = await axiosInstance.get("/users");
            setUserData(res.data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUserData();
    },[])

    if(isLoading){
        return <h1>Users loading</h1>
    }

    return(
        <div className="grid grid-cols-4 gap-2">
            {userData.map((val) => {
                return <UserCard key={val.id} user={val}/>
            })}
        </div>
    )
}

export default UserPage;