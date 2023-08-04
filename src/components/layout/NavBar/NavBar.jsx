import { CartWidget } from "../../common/CartWidget/CartWidget";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { routesNav } from "../../../routes/routesNav";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <NavLink to="/">
            <img
              src="https://res.cloudinary.com/dv8nczwtj/image/upload/v1684896617/Logo_jivlnb.png"
              alt="Logo"
              className="w-16 hover"
            />
          </NavLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {routesNav.map(({ id, to, brand }) => (
          <NavbarItem key={id} className="hover:scale-110 transition-all duration-100">
            <NavLink to={to}>{brand}</NavLink>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <CartWidget />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {routesNav.map(({ id, to, brand }) => (
          <NavbarMenuItem key={id}>
            <NavLink to={to}>{brand}</NavLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
