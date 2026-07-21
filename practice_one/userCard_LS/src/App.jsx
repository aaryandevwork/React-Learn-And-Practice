import { useState } from "react";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";

function App() {
  let [toggle, setToggle] = useState(true);
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || []);
  const [editingUser, setEditingUser] = useState(null);

  console.log("app Render");


  return (
    <div className="bg-gray-950 h-screen p-3 flex flex-col gap-4">
      <Navbar setToggle={setToggle} />
      {toggle ? (
        <div>
          <div className="flex gap-4">
            {users.map((elem) => {
              return (
                <UserCard
                  key={elem.id}
                  id={elem.id}
                  user={elem}
                  setUsers={setUsers}
                  setToggle={setToggle}
                  setEditingUser={setEditingUser}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <div className="h-full flex flex-1 items-center justify-center">
          <Register
            users={users}
            setUsers={setUsers}
            setToggle={setToggle}
            editingUser={editingUser}
            setEditingUser={setEditingUser}
          />
        </div>
      )}
    </div>
  );
}

export default App;
