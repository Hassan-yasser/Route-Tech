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
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Products", icon: <IoStorefrontOutline /> },
    { to: "/cart", label: "Cart", icon: <IoCartOutline /> },
    { to: "/favorites", label: "Favorites", icon: <IoHeartOutline /> },
  ];

  return (
    <nav className="bg-white  shadow sticky top-0 z-50 mb-5">
      <div className="w-full mx-auto mainPadding py-3 flex items-center justify-between">
        <NavLink to={"/"} className="text-xl font-bold text-primary ">
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
                      : "text-gray-600 dark:text-gray-300 hover:text-primary"
                  }`
                }
                end={link.to === "/"}
              >
                {link.icon}
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <button
            className="text-2xl text-primary cursor-pointer"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <IoCloseOutline /> : <IoMenuOutline />}
          </button>
        </div>
      </div>

      {menuOpen && <MobileView navLinks={navLinks} setIsOpen={setMenuOpen} />}
    </nav>
  );
};

export default Navbar;
