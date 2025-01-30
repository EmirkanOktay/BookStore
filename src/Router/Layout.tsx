import { Outlet, Link } from "react-router-dom";

function Layout() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/home">Home</Link>
            <Link to="/signup">SignUp</Link>
            <Link to="/register">Register</Link>
            <Link to="/notfound">Not Found</Link>

            <Outlet />
        </div>
    );
}

export default Layout;
