import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Destination from "./Pages/Destination";
import Technology from "./Pages/Technology";
import Crew from "./Pages/Crew";

function App() {
  return (
    <>
      <div className="h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/destination" element={<Destination />}></Route>
          <Route path="/crew" element={<Crew />}></Route>
          <Route path="/technology" element={<Technology />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
