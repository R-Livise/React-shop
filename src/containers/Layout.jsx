import React from 'react';
// Components
import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';
import NavBar from './NavBar';

// Hook
import { useClickOutHere } from "../hook/useClickOutHere"

const Layout = ({ children }) => {

    const themeOption = ["OS", "Dark", "Light"]
    const emailOption = ["My orders", "My account", "Sign out"]

    const onChangeTheme = (option) => {
        let container = document.querySelector("html");
        container.classList.remove("dark-theme", "light-theme");
        if (option === "Light") {
            container.classList.add("light-theme");
        } else if (option === "Dark") {
            container.classList.add("dark-theme");
        }
    }

    const { onClickOutHere, lastId, setLastId } = useClickOutHere()
    
    return (
        <React.Fragment>
            <NavBar navBarRight={
                [(<Menu
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
                            onClick={() => onChangeTheme(option)}
                        />
                    )}
                />),
                (<Menu
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
                            classItem={ idx==2 ? "MenuItem--primary":""}
                        />
                    )}
                />)]
            }
            />
            {children}
        </React.Fragment>
    );
};

export default Layout;