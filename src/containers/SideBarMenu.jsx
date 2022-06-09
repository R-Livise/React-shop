import React from 'react';

import '@styles/SideBarMenu.sass'

const SideBarMenu = ({ children }) => {
    return (
        <div className='SideBarMenu'>
            <div className="SideBarMenu__Icon" onClick={() => setToggleMenu(!toggleMenu)}>
                {children}
            </div>
            <ul>
                <li>CATEGORIES</li>
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
            <ul>
                <li>
                    <a href="/">My orders</a>
                </li>
                <li>
                    <a href="/">My account</a>
                </li>
            </ul>
            <ul className='SideBarMenu__config'>
                <li>
                    <a href="/">platzi@gmail.com</a>
                </li>
                <li>
                    <a href="/login">Sing Out</a>
                </li>
            </ul>
        </div>
    );
};

export default SideBarMenu;