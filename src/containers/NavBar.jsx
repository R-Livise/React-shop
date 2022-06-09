import React, { Fragment, useState, useContext } from 'react';

// Svg
import LogoSvg from "@logos/logo_yard_sale.svg"
import IconCartSvg from "@icons/icon_shopping_cart.svg"
import IconMenuSvg from "@icons/icon_menu.svg"

// Context
import AppContext from '../context/AppContext';

// Components
import Menu from '@components/Menu';
import MenuItem from '@components/MenuItem';
import MyOrder from '@containers/MyOrder'

// Style
import "@styles/NavBar.sass"
import { useClickOutHere } from '../hooks/useClickOutHere';
import SideBarMenu from './SideBarMenu';

const NavBar = ({ navBarRight }) => {
  const { state } = useContext(AppContext)
  const { onClickOutHere, lastId, setLastId } = useClickOutHere()
  const [toggleOrders, setToggleOrders] = useState(false)
  const [toggleMenu, setToggleMenu] = useState(false)

  const emailOption = ["My orders", "My account", "Sign out"]
  const themeOption = ["OS", "Dark", "Light"]

  const handleChangeTheme = (option) => {
    let container = document.querySelector("html");
    container.classList.remove("dark-theme", "light-theme");
    if (option === "Light") {
      container.classList.add("light-theme");
    } else if (option === "Dark") {
      container.classList.add("dark-theme");
    }
  }
  return (
    <Fragment>
      <nav className='Navbar'>
        <div className="Navbar__menu Navbar__svg" onClick={() => setToggleMenu(!toggleMenu)}>
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
            <li className='Navbar-right-items'> <Menu
              key="Theme"
              name="Theme"
              list={themeOption}
              lastIdToggle={lastId}
              setLastIdToggle={setLastId}
              onToggle={onClickOutHere}
              render={(option, idx) => (
                <MenuItem
                  key={idx}
                  text={option}
                  onClick={() => handleChangeTheme(option)}
                />
              )}
            /></li>
            <li className='Navbar-right-items'><Menu
              key="email"
              name="platzi@example.com"
              list={emailOption}
              onToggle={onClickOutHere}
              lastIdToggle={lastId}
              setLastIdToggle={setLastId}
              render={(option, idx) => (
                <MenuItem
                  key={idx}
                  text={option}
                  classItem={idx == 2 ? "MenuItem--primary" : ""}
                />
              )}
            /></li>
            <li className="Navbar-shopping-cart" onClick={() => setToggleOrders(!toggleOrders)}>
              <IconCartSvg className="icon-svg" />
              {state.cart.length > 0 && <div>{state.cart.length}</div>}
            </li>
          </ul>
        </div>

      </nav>
      {toggleOrders && <MyOrder onToggle={setToggleOrders} />}
      {toggleMenu && <SideBarMenu ><IconMenuSvg className="icon-svg" onClick={() => setToggleMenu(!toggleMenu)} /></SideBarMenu>}
    </Fragment>
  );
};

export default NavBar;