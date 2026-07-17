


let UserCard = ({user, id,setUsers,setToggle, setEditingUser }) => {

  function deleteUser(){
    setUsers((prev) => {
      return prev.filter((user) => user.id !== id);
    })
  }

  return (
    <div className="text-white p-4 border border-white bg-black rounded flex flex-col gap-2">
      <div className="h-40 w-40">
        <img
          className="object-cover h-full w-full rounded-xl"
          src={user.url}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-1">
        <h1>{user.name}</h1>
        <p className="text-sm">{user.email}</p>
        <p className="text-sm">{user.number}</p>
      </div>
      <div className="flex w-full justify-between gap-4">
        <button onClick={() => {
          setEditingUser(user);
          setToggle((prev) => !prev)}}
          className="bg-yellow-700 text-white py-2 px-3 rounded"
        >
          Update
        </button>
        {/* <button onClick={() => {deleteUserApp(id)}} className="bg-red-700 text-white py-2 px-3 rounded"> */}
        <button onClick={deleteUser} className="bg-red-700 text-white py-2 px-3 rounded">
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
