import { Search } from "lucide-react";
import "../styles/components/Header.scss";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header>
      <div className="container">
        <img src="/logo.webp" alt="Logo" className="logo" />

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
