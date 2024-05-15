import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes() {
	const auth = localStorage.getItem("role") === "Admin";

	return auth ? <Outlet /> : <Navigate to='/' />;
}

export default ProtectedRoutes;
