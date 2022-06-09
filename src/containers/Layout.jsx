import React from 'react';
// Components
import NavBar from './NavBar';


const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <NavBar />
            {children}
        </React.Fragment>
    );
};

export default Layout;