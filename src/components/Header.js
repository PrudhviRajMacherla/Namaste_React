import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link,NavLink } from "react-router-dom";
const Header = () => {
  const [btnName, setBtnName] = useState("login");
  useEffect(() => {
    console.log("useeffect called");
  }, []);
  console.log("header rendered");
  return (
    <div className="header">
      <img className="logo" src={LOGO_URL} />
      <div className="nav-items">
        <ul>
          <li>
            <NavLink to="/"> Home </NavLink>
          </li>
          <li>
            <NavLink to="/about"> About Us </NavLink>
          </li>
          <li>
            <NavLink to="/contact"> Contact Us </NavLink>
          </li>
          <li>
            <NavLink to="/"> Cart </NavLink>
          </li>
          <button
            className="login"
            onClick={() =>
              btnName == "login" ? setBtnName("logout") : setBtnName("login")
            }
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
