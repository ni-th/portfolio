import { Code, Home, Phone, User } from "lucide-react";
import { Button } from "../common/Button";
import { Link, useLocation } from "react-router-dom";

interface NavBarProps {
  className?: string;
}

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "About", path: "/about", icon: User },
  { name: "Projects", path: "/projects", icon: Code },
  { name: "Contacts", path: "/contacts", icon: Phone },
];



const NavBar: React.FC<NavBarProps> = ({ className = "" }) => {
  const location = useLocation();
  return (
   <div
      className={`grid grid-cols-2 md:grid-cols-4 gap-5 bg-gray-600/10 px-7 py-4 mx-2 rounded-4xl md:rounded-full ${className}`}
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.path}
            to={item.path}
            className="flex justify-center w-full"
          >
            <Button className={`flex items-center gap-2 px-6 w-full`}
              isActive={location.pathname === item.path}>
              <Icon size={18} />
              <span>{item.name}</span>
            </Button>
          </Link>
        );
      })}
    </div>
  );
};

export default NavBar;
