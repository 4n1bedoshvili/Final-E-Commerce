import logo from "../images/logo.svg";
import avatar from "../images/image-avatar.png";
import cartIcon from "../images/icon-cart.svg";
import menu from "../images/icon-menu.svg";
import "./Header.css";
import { useState } from "react";
import close from "../images/icon-close.svg";
import Cart from "./Cart"

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartIsOpen, setCartIsOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between p-8 border-b border-slate-400 max-w-7xl mx-auto relative">
        <div className="flex items-center justify-start gap-4">
          <ul className="flex items-center justify-start gap-4">
            { !isOpen && <li className="lg:hidden">
              <img
                onClick={() => setIsOpen(true)}
                src={menu}
                alt=""
                className="cursor-pointer"
              />
            </li>}
            {isOpen && (
              <li className="lg:hidden close">
                <img
                  onClick={() => setIsOpen(false)}
                  src={close}
                  alt=""
                  className="cursor-pointer w-6"
                />
              </li>
            )}
            <li>
              {" "}
              <img src={logo} alt="" />
            </li>
          </ul>

          <nav className={isOpen && "open"}>
            <ul className="">
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
        <div >
          <ul className="flex items-center justify-start gap-4">
            <li>
              <button className="text-2xl text-slate-600" onClick={() => setCartIsOpen(!cartIsOpen)}>
                <img className="w-3" src={cartIcon} alt="" />
              </button>
            </li>
            <li>
              {cartIsOpen && <Cart/>}
            </li>
            <li>
              <img className="w-9" src={avatar} alt="" />
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
