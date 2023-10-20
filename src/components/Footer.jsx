import { IconContext } from "react-icons";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";
import { Logo, PhoneIcon, EmailIcon } from "../assets";
import "./Footer.css";
import { useState } from "react";

function Footer() {
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState(false);
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleClick = () => {
    if (!emailRegex.test(email)) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };
  return (
    <footer>
      <div className="NewsletterBox">
        <h1 className="NewsletterBox-Title">newsletter</h1>
        <p className="NewsletterBox-Para">
          To receive tips on how to grow your community, sign up to our weekly
          newsletter. We&apos;ll never send you spam or pass on your email
          address
        </p>
        <div>
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleChange}
              required
              className="NewsletterBox-Input"
            />
            {isError && <p className="error">Please check your email</p>}
          </label>
          <button className="NewsletterBox-Btn" onClick={handleClick}>
            subscribe
          </button>
        </div>
      </div>
      <div className="AddressBox">
        <a href="#" className="FooterLogo" aria-label="huddle">
          <img src={Logo} alt="" />
        </a>
        <p className="AddressBox-Para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla
          quam, hendrerit lacinia vestibulum a, ultrices quis sem.
        </p>
        <address>
          <img src={PhoneIcon} alt="" />
          <p>Phone: +1-543-123-4567</p>
        </address>
        <address>
          <img src={EmailIcon} alt="" />
          <p>example@huddle.com</p>
        </address>
        <ul className="AddressBox-SocialIcons">
          <li>
            <a href="#" aria-label="facebook">
              <IconContext.Provider value={{ className: "socialIcon" }}>
                <div>
                  <FaFacebookSquare />
                </div>
              </IconContext.Provider>
            </a>
          </li>
          <li>
            <a href="#" aria-label="instagram">
              <IconContext.Provider value={{ className: "socialIcon" }}>
                <div>
                  <FaInstagram />
                </div>
              </IconContext.Provider>
            </a>
          </li>
          <li>
            <a href="#" aria-label="twitter">
              <IconContext.Provider value={{ className: "socialIcon" }}>
                <div>
                  <FaTwitterSquare />
                </div>
              </IconContext.Provider>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
