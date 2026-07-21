import { useState } from "react";
import Counter from "./components/Counter";
import Cards from "./components/Cards";
import Form from "./components/Form";
import Register from "./components/Register";
import UserCart from "./components/UserCard";

let App = () => {

  const [user, setUser] = useState([]);


  return (
    <div className="bg-gray-900 text-white h-screen flex justify-center items-center">
      {/* <Counter /> */}
      {/* <Cards /> */}
      {/* <Form /> */}
      <Register setUser={setUser} />

      <div className="flex gap-4">
        {user.map((elem) => (
          <UserCart user={elem} />
        ))}
      </div>  
    </div>
  );
}

export default App;