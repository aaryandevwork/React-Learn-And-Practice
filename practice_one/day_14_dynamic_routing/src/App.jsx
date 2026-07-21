import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AppRountes from "./routes/AppRoutes";

function App(){
  return(
    <div className="bg-gray-900 h-full p-3 text-white flex flex-col gap-3">
      <Navbar/>
      <AppRountes />
      

    </div>
  )
}

export default App;