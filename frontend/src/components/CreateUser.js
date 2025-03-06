import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

const CreateUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [role, setRole] = useState("User");
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem("access_token"); 
        if (!token) {
            alert("You need to log in first!");
            return;
        }

        const userData = { name, email, phone, role };

        try {
            const response = await fetch("http://127.0.0.1:8000/api/users/", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`, 
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });

            const data = await response.json(); 

            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${data.detail || "Unknown error"}`);
            }

            alert("User created successfully!");
            navigate("/"); 
        } catch (error) {
            console.error("Error creating user:", error);
            alert(`Failed to create user: ${error.message}`); 
        }
    };

    return (
        <div className="container mt-4">
            <h2>Create New User</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email Address</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input type="text" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Role</label>
                    <select className="form-control" value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="User">User</option>
                        <option value="Admin">Admin</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Create User</button>
            </form>
        </div>
    );
};

export default CreateUser;
