import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Add from "./components/Pages/Add/Add";
import Search from "./components/Pages/Search/Search";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			<Route path="/Add" element={<Add/>}/>
			<Route path="/search" element={<Search/>}/>
		</Routes>
	);
}

export default App;
