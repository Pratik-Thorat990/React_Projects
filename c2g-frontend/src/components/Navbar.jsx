    import React from 'react';
    import { useNavigate } from 'react-router-dom';
    import LogoutIcon from '@mui/icons-material/Logout';
    import AccountCircleIcon from '@mui/icons-material/AccountCircle';


    const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        navigate("/login");
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md px-6 py-4 flex items-center justify-between">
        {/* Left: Brand Name */}
        <div className="text-2xl font-bold text-amber-300">
            C2G
        </div>

        {/* Right: Links + Logout */}
        <div className="flex items-center gap-6">
            <a href="#about" className="text-gray-600 hover:text-amber-600 hidden md:block">
            About Us
            </a>
            <a href="#contact" className="text-gray-600 hover:text-amber-600 hidden md:block">
            Contact
            </a>

             {/* Profile Icon */}
            <AccountCircleIcon
                className="cursor-pointer text-gray-700 hover:text-amber-600 transition-colors duration-300 w-10 h-8 sm:w-8 sm:h-8 md:w-10 md:h-10"
                fontSize="medium"
            />

            {/* Logout Icon */}
            <button
                onClick={handleLogout}
                className="p-2 rounded-full hover:bg-red-100 transition duration-300"
            >
                <LogoutIcon
                className="text-gray-700 hover:text-red-600 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9"
                fontSize="medium"
                />
            </button>

        
        </div>
    </nav>
    );
    };

    export default Navbar;
