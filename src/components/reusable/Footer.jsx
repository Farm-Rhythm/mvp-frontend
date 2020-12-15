// skeleton, simple content, design of specific content, design of generic content
import { Link } from "react-router-dom";
import LanguageSwitch from "./LanguageSwitch";

const Footer = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <LanguageSwitch />
      <button>Term of Use</button>
      <button>Privacy Policy</button>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact-us</Link>
      <span>Farm Rhythm © copyright 2020</span>
    </div>
  );
};

export default Footer;
