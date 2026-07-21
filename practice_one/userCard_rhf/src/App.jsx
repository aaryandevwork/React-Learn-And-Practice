import { useState } from "react";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import Register_1 from "./components/Register_1";

function App() {
  let [toggle, setToggle] = useState(true);
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  // function deleteUserApp(id){
  //     let restUsers = users.filter((user) => user.id !== id);
  //     setUsers(restUsers);
  //     // console.log(users);
  // }
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
          <Register_1
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
