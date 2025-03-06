import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("access_token");  
        localStorage.removeItem("refresh_token"); 
        alert("Logged out successfully!");
        navigate("/login"); 
    };

    return (
        <nav className="navbar navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">User Management</Link>
            <div>
                <Link className="btn btn-primary mx-2" to="/login">Login</Link>
                <Link className="btn btn-success mx-2" to="/add-user">Add User</Link>
                <button className="btn btn-danger mx-2" onClick={handleLogout}>Logout</button>  
            </div>
        </nav>
    );
};

export default Navbar;
