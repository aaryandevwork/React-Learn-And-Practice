import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

function Register({ users, setUsers, setToggle, editingUser, setEditingUser }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  function onSubmit(data) {
    // console.log(data);

    if (editingUser) {
      let updatedUser;
      setUsers((prev) => {
        updatedUser = prev.map((user) =>
          user.id === editingUser.id ? { ...user, ...data } : user,
        );
        return updatedUser;
      });

      localStorage.setItem("users", JSON.stringify(updatedUser));
      setEditingUser(null);
    } else {
      const newUser = [
        ...users,
        {
          id: crypto.randomUUID(),
          ...data,
        },
      ];
      console.log(newUser);
      setUsers(newUser);
      localStorage.setItem("users", JSON.stringify(newUser));
    }

    reset();
    setToggle((prev) => !prev);
  }

  // user ke value to form ke input field me dalne ka trika
  useEffect(() => {
    if (editingUser) {
      reset(editingUser);
    }
  }, [editingUser]);

  return (
    <div className="text-white">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 border-2 p-5 rounded-lg w-78"
      >
        <h1 className="text-2xl text-center">this is register form</h1>
        <input
          {...register("name", {
            required: "Name is Required",
            pattern: {
              value: /^\S.*$/,
              message: "Blank spaces is not allowed",
            },
          })}
          type="text"
          placeholder="Name"
          className=" border border-gray-300 rounded px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {errors.name && <p className="text-red-600">{errors.name.message}</p>}

        <input
          {...register("email", {
            required: "email is Required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Please enter valid email",
            },
          })}
          type="email"
          placeholder="Email"
          className=" border border-gray-300 rounded px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {errors.email && <p className="text-red-600">{errors.email.message}</p>}
        <input
          {...register("number", {
            required: "number is Required",
            minLength: {
              value: 10,
              message: "Minimum 10 numbers",
            },
            maxLength: {
              value: 10,
              message: "maximum 10 numbers",
            },
          })}
          type="number"
          placeholder="Phone Number"
          className=" border border-gray-300 rounded px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {errors.number && (
          <p className="text-red-600">{errors.number.message}</p>
        )}
        <input
          {...register("url", {
            required: "image url is Required",
          })}
          type="url"
          placeholder="Image url"
          className=" border border-gray-300 rounded px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {errors.url && <p className="text-red-600">{errors.url.message}</p>}
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
