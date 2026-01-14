import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/components/Header.scss";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link to={"/"}>
          <img src="/logo.webp" alt="Logo" className="logo" />
        </Link>

        <form action="/recipes">
          <div>
            <label htmlFor="search-header">
              <Search size={30} />
            </label>
            <input
              type="search"
              name="search"
              id="search-header"
              placeholder="Ex : Oeufs Mimosas"
            />
          </div>
        </form>

        <NavBar active="none" />
      </div>
    </header>
  );
};

export default Header;
