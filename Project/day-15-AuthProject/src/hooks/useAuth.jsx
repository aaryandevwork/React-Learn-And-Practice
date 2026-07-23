import { useContext } from "react";
import { AuthStore } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

export const useAuth = () => {
      let navigate = useNavigate();
  let { loggedUser, setLoggedUser, registeredUsers, setRegisteredUsers} = useContext(AuthStore);

  let {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const loginFormSubmit = (data) => {
    
    let loggedUser = registeredUsers.find((val) => {
        return val.email === data.email && val.password === data.password;
    })

    if(!loggedUser){
        alert("invalid creds or user not found");
        reset();
        return;
    }
    
    setLoggedUser(loggedUser);
    localStorage.setItem("loggedInUser",JSON.stringify(loggedUser));
    alert("User Logged in");
    reset();
    navigate("/main");
  };


    const RegisterFormSubmit = (data) => {
    let newUser = [...registeredUsers,data];
    setRegisteredUsers(newUser);
    setLoggedUser(newUser);
    localStorage.setItem("registeredUsers",JSON.stringify(newUser));
    localStorage.setItem("loggedInUser",JSON.stringify(data));
    alert("User Register and Logged in");
    reset();
    navigate("/main");
  }


  return {
    register,
    handleSubmit,
    errors,
    loginFormSubmit,
    navigate,
    RegisterFormSubmit
  }

}