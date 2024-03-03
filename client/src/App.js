import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";

import Search from "./components/Pages/Search/Search";
import ProfileComponent from "./components/Pages/Profile";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const user = localStorage.getItem("token");

  return (
    <Routes>
      {user && <Route path="/" exact element={<Main />} />}
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/Profile" element={<ProfileComponent />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
}

export default App;
