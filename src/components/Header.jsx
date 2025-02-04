import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center bg-black text-white py-4 px-6 md:px-12">
      <img className="h-16" src="logo.png" alt="Blockchain Boostup Logo" />
      
      {/* Mobile Menu Icon */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
      
      {/* Navigation Links */}
      <nav
        className={`absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent flex flex-col md:flex-row md:items-center gap-6 md:gap-10 text-xl p-6 md:p-0 transition-all duration-300 ${isOpen ? "block" : "hidden md:flex"}`}
      >
        <a href="#" className="hover:text-purple-400">Home</a>
        <a href="#" className="hover:text-purple-400">Blockchain</a>
        <a href="#" className="hover:text-purple-400">MLM Plans</a>
        <a href="#" className="text-purple-400">About Us</a>
        <a href="#" className="hover:text-purple-400">Blogs</a>
      </nav>
    </header>
  );
};

export default Header;