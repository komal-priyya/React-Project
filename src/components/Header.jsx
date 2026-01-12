
import React, { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { BsBag } from "react-icons/bs";
import { Toaster } from "react-hot-toast";
import Logo from "../img/logo.svg";
import { useState, useEffect} from "react";

const Header = () => {
    // const [isActive, setIsActive] = useState(false);

  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const { user, logout } = useAuth();
  const navigate = useNavigate();




  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Failed to logout", error);
    }
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <header 
      className="bg-white py-4 shadow-md fixed w-full z-50 top-0">

      
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Logo + Title */}
          <Link to="/" className="flex items-center gap-x-2">
            <img className="w-[40px]" src={Logo} alt="Logo" />
            <span className="text-2xl font-bold text-black">FakeStore</span>
          </Link>

          {/* Auth & Cart Section */}
          <div className="flex items-center gap-4">
            {user ? (
              <>
                <span className="text-xl text-gray-900 hidden md:block bg-cyan-500 px-4 py-1 rounded-md border-black border-2">
                  {/* {user.email} */}
                 {user.email.split('@')[0]}
                </span>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-black text-white text-sm rounded-md hover:bg-gray-800 transition"
                >
                  Logout
                </button>
                {/* Cart Icon ONLY after login */}
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="cursor-pointer relative"
                >
                  <BsBag className="text-2xl" />
                  <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
                    {itemAmount}
                  </div>
                </div>
              </>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  to="/login"
                  className="px-4 py-2 bg-white text-black hover:bg-cyan-500 text-xl border border-gray-700 rounded-md  transition"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 bg-black text-white text-xl border-[4px] rounded-lg hover:bg-gray-800 transition"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
