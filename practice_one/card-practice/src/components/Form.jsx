import { use, useState } from "react";

const Form = () => {
    const [user,setUser] = useState({
        name :  "",
        username : "",
        password : ""
    });

    const handleChange = (e) => {
        let {name ,value} = e.target;
        setUser({...user,[name] : value})

    }
    const show = () =>{
        console.log(user);
        
    }

    return(
        <div className=" h-100 w-3xs flex flex-col justify-center items-center border-2 rounded-xl gap-8">
            <h1 className="text-2xl uppercase text-yellow-500">This is form</h1>
            {/* <label htmlFor="name">Name</label> */}
            <input onChange={(e) => {
                setUser({...user, name : e.target.value})
                // console.log(e);
                }} type="text" name="name" placeholder="Enter Your Name" className="border-2 rounded text-center p-2" />
            <input onChange={handleChange} type="text" name="username" placeholder="Enter User Name" className="border-2 rounded text-center p-2"/>
            <input  onChange={handleChange} type="password" name="password" placeholder="Enter Password" className="border-2 rounded text-center p-2"/>
            <button onClick={show} className="border-2 p-2 w-50 rounded hover:bg-amber-600 ">Login</button>
        </div>
    )
}

export default Form;