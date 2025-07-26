import { type ReactNode } from "react";
import { NavLink } from "react-router-dom";
interface Links {
  to: string;
  icon: ReactNode;
  label: string;
}
const MobileView = ({
  navLinks,
  setIsOpen,
}: {
  navLinks: Links[];
  setIsOpen: (action: boolean) => void;
}) => {
  return (
    <div className="md:hidden bg-white border-t px-6 pb-4 space-y-3 animate-fade-in-down">
      {navLinks.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            `flex items-center gap-2 py-2 border-b text-sm font-medium transition ${
              isActive
                ? "text-primary font-semibold"
                : "text-gray-600 hover:text-primary"
            }`
          }
        >
          {link.icon}
          {link.label}
        </NavLink>
      ))}
    </div>
  );
};

export default MobileView;
