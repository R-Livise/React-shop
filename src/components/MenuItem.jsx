import React from 'react';
import '../styles/MenuItem.sass'

const MenuItem = ({text,onClick,classItem}) => {
    return (
            <li className={'MenuItem '+classItem} onClick={onClick}><a>{text}</a></li>
    );
};

export default MenuItem;