import React from 'react';
import LogoSvg from "../assets/logos/logo_yard_sale.svg"
import IconCartSvg from "../assets/icons/icon_shopping_cart.svg"
import IconMenuSvg from "../assets/icons/icon_menu.svg"

import "../styles/NavBar.sass"
const NavBar = ({ navBarRight }) => {
  return (
    <nav className='Navbar'>
      <div className="Navbar__menu Navbar__svg">
        <IconMenuSvg className="icon-svg" />

      </div>

      <div className="Navbar-left">
        <div className="Navbar__logo Navbar__svg ">
          <LogoSvg className="icon-svg" />

        </div>
        <ul>
          <li>
            <a href="/">adasdAll</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>

      <div className="Navbar-right">
        <ul>
          {navBarRight.map((item, idx) => <li key={idx} >{item}</li>)}
          <li className="Navbar-shopping-cart">
            <IconCartSvg className="icon-svg" />
            <div>2</div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;