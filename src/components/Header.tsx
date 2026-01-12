import { Search } from "lucide-react";
import "../styles/components/Header.scss";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link to={"/"}><img src="/logo.webp" alt="Logo" className="logo" /></Link>
        

        <div>
          <label htmlFor="search-header">
            <Search size={30} />
          </label>
          <input
            type="search"
            name="search-header"
            id="search-header"
            placeholder="Ex : Oeufs Mimosas"
          />
        </div>

        <NavBar active="none" />
      </div>
    </header>
  );
};

export default Header;
