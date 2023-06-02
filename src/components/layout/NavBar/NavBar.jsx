import "./NavBar.css";
import { CartWidget } from "../../common/CartWidget/CartWidget";
import { useState } from "react";

export const NavBar = () => {
  const [showNav, setShowNav] = useState(false);

  const handleNavClick = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      <nav className="flex items-center justify-between pl-8 pr-16 fixed w-full border h-20 top-0 bg-white/30 backdrop-blur-sm z-10">
        {/* Logo */}
        <img
          src="https://res.cloudinary.com/dv8nczwtj/image/upload/v1684896617/Logo_jivlnb.png"
          alt="Logo"
          className="logo"
        />
        {/* Nav WEB*/}
        <div className="md:flex flex-row space-x-5 hidden">
          <a href="#" className="brand">
            Apple
          </a>
          <a href="#" className="brand">
            Samsung
          </a>
          <a href="#" className="brand">
            Xiaomi
          </a>
          <a href="#" className="brand">
            Google
          </a>
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
          className="flex fixed w-full flex-col justify-center items-center space-y-4 pb-2 border-b-2 border-black md:hidden bg-white/30 top-20 pt-4 backdrop-blur-sm"
          style={{ animation: "fadeIn .5s linear" }}
        >
          <a href="#" className="brand">
            Apple
          </a>
          <a href="#" className="brand">
            Samsung
          </a>
          <a href="#" className="brand">
            Xiaomi
          </a>
          <a href="#" className="brand">
            Google
          </a>
        </div>
      )}
    </>
  );
};
