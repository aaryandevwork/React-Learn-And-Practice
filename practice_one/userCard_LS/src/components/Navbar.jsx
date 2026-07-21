


let Navbar = ({setToggle}) => {
  return (
    <div className="text-white flex justify-between items-center p-2 border border-amber-50 rounded-lg bg-gray-900">
      <div className="ml-3 text-2xl font-extrabold">
        <h1>User</h1>
      </div>
      <div className="flex gap-9">
        <h1>Project</h1>
        <h1>About</h1>
        <h1>Contact</h1>
      </div>
      <div className="w-26">
        <button onClick={() => {setToggle((prev) => !prev)}} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 cursor-pointer">
          Register
        </button>
      </div>
    </div>
  );
};

export default Navbar;
