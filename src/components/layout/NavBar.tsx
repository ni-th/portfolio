
import { Code, Home, Phone, User } from "lucide-react";
import { Button } from "../common/Button";
import { Link } from "react-router-dom";

interface NavBarProps {
  className?: string;
}

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "About", path: "/about", icon: User }, // Education inside About
  { name: "Projects", path: "/projects", icon: Code }, // Add this
  { name: "Contacts", path: "/contacts", icon: Phone }, // Fixed spelling
];

const NavBar: React.FC<NavBarProps> = ({ className = "" }) => {
  return (
    <div
      className={`grid grid-cols-4 gap-5 bg-gray-600/10 px-7 py-4 rounded-full ${className}`}
    >
      {navItems.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.path}
            to={item.path}
            className="block w-full"
          >
            <Button className="w-full flex items-center gap-2">
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
