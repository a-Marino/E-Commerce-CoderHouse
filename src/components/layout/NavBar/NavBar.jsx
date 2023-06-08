import "./NavBar.css";
import { CartWidget } from "../../common/CartWidget/CartWidget";
import { useState } from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [showNav, setShowNav] = useState(false);

  const handleNavClick = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      <nav className="flex items-center justify-between pl-8 pr-16 fixed w-full border h-20 top-0 bg-white/30 backdrop-blur-sm z-10">
        {/* Logo */}
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dv8nczwtj/image/upload/v1684896617/Logo_jivlnb.png"
            alt="Logo"
            className="logo"
          />
        </Link>
        {/* Nav WEB*/}
        <div className="md:flex flex-row space-x-5 hidden">
          <Link to="/category/apple" className="brand">
            Apple
          </Link>
          <Link to="/category/samsung" className="brand">
            Samsung
          </Link>
          <Link to="/category/xiaomi" className="brand">
            Xiaomi
          </Link>
          <Link to="/category/google" className="brand">
            Google
          </Link>
        </div>
        {/* BTN Nav Mobil */}
        <button className="md:hidden" onClick={handleNavClick}>
          <img
            src="https://res.cloudinary.com/dv8nczwtj/image/upload/v1684859901/menu_wh8ccz.png"
            alt="Menu"
            className="w-6"
          />
        </button>
        {/* Cart */}
        <CartWidget className="flex flex-grow basis-0 justify-end" />
      </nav>
      {/* Nav Mobil */}
      {showNav && (
        <div
          className="flex fixed w-full flex-col justify-center items-center space-y-4 pb-2 border-b-2 border-black md:hidden bg-white/30 top-20 pt-4 backdrop-blur-sm z-10"
          style={{ animation: "fadeIn .5s linear" }}
        >
          <Link to="/category/apple" className="brand">
            Apple
          </Link>
          <Link to="/category/samsung" className="brand">
            Samsung
          </Link>
          <Link to="/category/xiaomi" className="brand">
            Xiaomi
          </Link>
          <Link to="/category/google" className="brand">
            Google
          </Link>
        </div>
      )}
    </>
  );
};
