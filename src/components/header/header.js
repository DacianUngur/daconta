import "./header.css";
import Logo from "../logo/daconta-b.png";
import Navigation from "../navigation/navigation.js";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to={"/"}>
        <img src={Logo} alt="logo" />
      </Link>
      <Navigation />
    </header>
  );
}

export default Header;
