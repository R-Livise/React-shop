import React, { useContext } from 'react';

// Svg
import LogoSvg from "@logos/logo_yard_sale.svg"
import IconCartSvg from "@icons/icon_shopping_cart.svg"
import IconMenuSvg from "@icons/icon_menu.svg"

// Context
import AppContext from '../context/AppContext';

// Style
import "@styles/NavBar.sass"
const NavBar = ({ navBarRight }) => {
  const { state } = useContext(AppContext)
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
            <a href="/">All</a>
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
            {state.cart.length > 0 && <div>{state.cart.length}</div>}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;