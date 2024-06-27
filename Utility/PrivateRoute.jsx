import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../src/Hooks/useAuth";
import Spiner from "../src/Components/Spiner";


const PrivateRoute = ({children}) => {
    const { user, loading } = useAuth()
    const location = useLocation();
    if (loading) {
        return <Spiner/>
    }
    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to={`/login`} replace={true} />
};

export default PrivateRoute;