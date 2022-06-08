import React from 'react';

import '@styles/Menu.sass'
const Menu = ({ title, name, list, children, render, lastIdToggle, setLastIdToggle, onToggle }) => {
    const [idMenu, setIdMenu] = React.useState(`Menu${Math.trunc(Math.random() * 99)}`)
    const idMenuContainer = `${idMenu}-container`
    const renderFunction = children || render;

    const styleActivate = "Menu__active"
    // Button 
    const activeListener = () => {
        const classList = document.querySelector(`#${idMenu}`).classList
        if (!classList.contains(styleActivate)) {
            onToggle(idMenu, onTurnOffItems, idMenuContainer)
            classList.add("Menu__active")
        }
    }
    const onTurnOnItems = () => {

        if (lastIdToggle !== idMenuContainer) {
            activeListener()
        } else {
            setLastIdToggle(idMenu)
        }
    }
    const onTurnOffItems = () => {
        document.querySelector(`#${idMenu}`).classList.remove(styleActivate)
    }

    return (
        <div className='Menu' id={idMenuContainer} >
            <div className='Menu__title' onClick={onTurnOnItems}>{title ? title(name) : name} </div>
            <ul id={idMenu} >{list.map(renderFunction)}</ul>
        </div>
    );
};


export default Menu;