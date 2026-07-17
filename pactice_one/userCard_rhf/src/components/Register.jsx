// this is  useRef register

import { useRef, useState } from "react";


function Register() {

    let formRef = useRef({});
    let [user,setUser] = useState([]);
    console.log("register rendering");
    
    function handleSubmit(e){
        e.preventDefault();
        // console.log(e);
        let data = {
            name : formRef.current.name.value,
            email : formRef.current.email.value,
            number : formRef.current.number.value,
            image : formRef.current.url.value
        }
        
        
        
        setUser((prev) => [...prev,data])
        // setUser(data)
        console.log(user);
    
    }
  return (
    <div className="text-white">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 border-2 p-5 rounded-lg w-78">
        <h1 className="text-2xl text-center">this is register form</h1>
        <input
            ref={(e) => (formRef.current.name = e)}
          type="text"
          placeholder="Name"
          className=" border border-gray-300 rounded px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <input
        ref={(e) => (formRef.current.email = e)}
          type="email"
          placeholder="Email"
          className=" border border-gray-300 rounded px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <input
        ref={(e) => (formRef.current.number = e)}
          type="number"
          placeholder="Phone Number"
          className=" border border-gray-300 rounded px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <input
        ref={(e) => (formRef.current.url = e)}
          type="url"
          placeholder="Image url"
          className=" border border-gray-300 rounded px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 cursor-pointer"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
