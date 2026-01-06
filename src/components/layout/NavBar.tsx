import { Button } from "../common/Button";
import { Link } from "react-router-dom";

interface NavBarProps {
  className?: string;
}

const NavBar: React.FC<NavBarProps> = ({ className = "" }) => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/abouts" },
    { name: "Education", path: "/abouts" },
    { name: "Contacts", path: "/contacts" },
  ];

  return (
    <div className={`${className} flex justify-center items-center sticky top-0 z-50`}>
      <div className="flex justify-center items-center gap-5 bg-gray-600/10 px-7 py-4 rounded-full">
        {navItems.map((item, index) => (
          <Link to={item.path} key={index}>
            <Button>{item.name}</Button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
