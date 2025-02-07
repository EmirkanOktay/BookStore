import { Outlet, Link } from "react-router-dom";
function Layout() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="home">Home</Link>
            <Link to="signup">SignUp</Link>
            <Link to="register">Register</Link>
            <Link to="notfound">Not Found</Link>
            <Link to="accessibility">Accessibility Policy</Link>
            <Link to="contact">Contact</Link>
            <Link to="refund">Refund</Link>
            <Link to="terms-of-use">Terms Of Use</Link>
            <Link to="about-us">About Us</Link>
            <Link to="forget-password">Forget Password</Link>
            <Link to="my-account">My Account</Link>
            <Link to="my-favorites">My Favorites</Link>
            <Link to="Pay">Pay</Link>
            <Outlet />
        </div>
    );
}

export default Layout;
