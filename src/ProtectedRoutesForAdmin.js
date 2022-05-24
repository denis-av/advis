import { Navigate, Outlet } from "react-router-dom";
const useAuth = () =>{
    const user = {loggedIn: (localStorage.getItem("AdminLogged") === "true")}
    return user && user.loggedIn;
}

const ProtectedRoutesForAdmin = () =>{
    const isAuth = useAuth();
    console.log(isAuth);
    return isAuth ? <Outlet /> : <Navigate to="/home" />;
}

export default ProtectedRoutesForAdmin;