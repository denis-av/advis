import { Navigate, Outlet } from "react-router-dom";
const useAuth = () =>{
    const user = {loggedIn: (localStorage.getItem("UserLogged") === "true")}
    return user && user.loggedIn;
}

const ProtectedRoutesForUser = () =>{
    const isAuth = useAuth();
    console.log(isAuth);
    return isAuth ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoutesForUser;