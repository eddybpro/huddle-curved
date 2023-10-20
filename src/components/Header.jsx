import "./Header.css";
import Navbar from "./Navbar";

function Header() {
  return (
    <header>
      <Navbar />
      <h1 className="HeaderTitle">build the community your fans will love</h1>
      <p className="HeaderPara">
        Huddle re-imagines the way we build communities. You have a voice, but
        so does your audience. Create connections with your users as you engage
        in genuine discussion.
      </p>
      <button className="HeaderBtn">get started for free</button>
    </header>
  );
}
export default Header;
