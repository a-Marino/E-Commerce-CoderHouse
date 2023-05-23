import "./NavBar.css";
import { CartWidget } from "../../common/CartWidget";
import { useState } from "react";

export const NavBar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between py-4 pl-8 pr-16">
        {/* Logo */}
        <img
          src="https://res.cloudinary.com/dv8nczwtj/image/upload/v1684851805/Logo_rwyfyh.png"
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
            Motorola
          </a>
        </div>
        {/* BTN Nav Mobil */}
        <button className="md:hidden" onClick={() => setShowNav(!showNav)}>
          <img
            src="https://res.cloudinary.com/dv8nczwtj/image/upload/v1684859901/menu_wh8ccz.png"
            alt="Menu"
            className="w-6"
          />
        </button>
        {/* Cart */}
        <CartWidget />
      </nav>
      {/* Nav Mobil */}
      {showNav && (
        <div className="flex flex-col justify-center items-center space-y-4 pb-2 border-b-2 border-black md:hidden">
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
            Motorola
          </a>
        </div>
      )}
    </>
  );
};
