import { NavLink } from "react-router-dom";
import {
  IoHeartOutline,
  IoCartOutline,
  IoStorefrontOutline,
  IoMenuOutline,
  IoCloseOutline,
} from "react-icons/io5";
import { useState } from "react";
import MobileView from "./MobileView";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/products", label: "Products", icon: <IoStorefrontOutline /> },
    { to: "/cart", label: "Cart", icon: <IoCartOutline /> },
    { to: "/favorites", label: "Favorites", icon: <IoHeartOutline /> },
  ];

  return (
    <nav className="bg-white shadow sticky top-0 z-50 mb-5">
      <div className="mainPadding py-3 flex items-center justify-between">
        <NavLink to={"/products"} className="text-xl font-bold text-primary">
          ShopEasy
        </NavLink>
        <ul className="hidden md:flex gap-6 pe-0.5">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center gap-1 text-sm font-medium transition ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-gray-600 hover:text-primary"
                  }`
                }
              >
                {link.icon}
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden text-2xl text-primary cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <IoCloseOutline /> : <IoMenuOutline />}
        </button>
      </div>

      {isOpen && <MobileView navLinks={navLinks} setIsOpen={setIsOpen} />}
    </nav>
  );
};

export default Navbar;
