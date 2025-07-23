import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="navbar flex items-center justify-between px-4 py-2">
      <Link to="/">
        <p className="text-2xl font-bold text-gradient">Resumind</p>
      </Link>
      <Link to="/upload" className="primary-button w-fit">
        Upload Resume
      </Link>
    </nav>
  );
};

export default Navbar;
