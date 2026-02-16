import "./App.css";
import { Outlet } from "react-router-dom";
import { NavBar } from "./componets/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
