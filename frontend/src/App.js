import { Routes, Route } from "react-router-dom";
import UsersList from "./components/UsersList";
import CreateUser from "./components/CreateUser";
import Login from "./components/login";
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<UsersList />} />
                    <Route path="/add-user" element={<CreateUser />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </>
    );
};

export default App;
