import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { FcApproval, FcHighPriority, FcShop } from "react-icons/fc";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  //Subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="flex justify-between shadow-lg ">
      <div className="logo-container">
        <img className="w-32" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 flex items-center">
            onlineStatus:{" "}
            <span className="ml-2">
              {onlineStatus ? <FcApproval /> : <FcHighPriority />}
            </span>
          </li>
          <li className="px-4">
            <Link to="/"> Home </Link>
          </li>
          <li className="px-4">
            <Link to="/about"> About Us </Link>
          </li>
          <li className="px-4">
            <Link to="/contact"> Contact Us </Link>
          </li>
          <li className="px-4">
            <Link to="/grocery"> Grocery </Link>
          </li>
          <li className="px-4 font-bold text-xl flex items-center">
              <Link to="/cart">
            <span className="flex items-center gap-2">
                <FcShop />
                {cartItems.length}
            </span>
              </Link>
          </li>
          <li className="px-4">
            <button
              className="login"
              onClick={() =>
                btnName == "login" ? setBtnName("logout") : setBtnName("login")
              }
            >
              {btnName}
            </button>
          </li>
          <li className="font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
