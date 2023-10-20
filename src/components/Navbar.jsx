import { Logo } from "../assets";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <a href="#" className="Logo" aria-label="huddle">
        <img src={Logo} alt="" />
      </a>
      <button className="NavBtn">try it free</button>
    </nav>
  );
}
export default Navbar;
