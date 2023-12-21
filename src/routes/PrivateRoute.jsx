import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <p className="text-xl text-center">Loading.... </p>
    }
    if(user){
        return children
    }
    return <Navigate state={{from:location}} replace  to='/login'></Navigate>
};

export default PrivateRoute;