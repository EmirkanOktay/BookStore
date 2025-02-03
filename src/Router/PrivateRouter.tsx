import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { userMemberStatus } from "../Redux/UserStatusSlicer";

const PrivateRoute = ({ children }: any) => {
    const isMember = useSelector(userMemberStatus);

    if (!isMember) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default PrivateRoute;
