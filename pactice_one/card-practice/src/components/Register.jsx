import { useState } from "react";

const Register = ({setUser}) => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        image: "",
        password: ""
    })


    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // setUser([...user,formData]);
        setUser((prev) => [...prev,formData]);
        setFormData({
            name: "",
            email: "",
            image: "",
            password: ""
        })
    }
    // console.log(user);

    // console.log(formData);

    return (
        <div className=" h-130 w-96 bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                Register
            </h1>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex flex-col gap-4">
                    <input
                        onChange={handleChange}
                        value={formData.name}
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        className=" text-black border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />

                    <input
                        onChange={handleChange}
                        value={formData.email}
                        type="email"
                        name="email"
                        placeholder="Enter your FormDataname"
                        className=" text-black border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />

                    <input
                        onChange={handleChange}
                        value={formData.image}
                        type="url"
                        name="image"
                        placeholder="Enter image URL"
                        className=" text-black border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />

                    <input
                        onChange={handleChange}
                        value={formData.password}
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        className=" text-black border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 cursor-pointer"
                >
                    Register
                </button>

                <p className="text-center text-gray-600">
                    Already have an account?{" "}
                    <span className="text-blue-600 font-medium cursor-pointer hover:underline">
                        Login
                    </span>
                </p>
            </form>
        </div>
    );
};

export default Register;