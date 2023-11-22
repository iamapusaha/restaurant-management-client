import { Navigate, useLocation } from "react-router-dom";
import UseAdmin from "../hooks/UseAdmin";
import useAuth from "../hooks/useAuth";


const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const [isAdmin, isAdminLoading] = UseAdmin()
    const location = useLocation()
    if (loading || isAdminLoading) {
        return <span className="loading loading-infinity loading-lg"></span>
    }
    if (user && isAdmin) {
        return children
    }
    return <Navigate state={{ from: location }} replace to='/'></Navigate>
};

export default AdminRoute;