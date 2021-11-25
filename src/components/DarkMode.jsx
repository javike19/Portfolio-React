import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../styles/themes.js";
import "./DarkMode.scss";

const StyledApp = styled.div`

`;

const DarkMode = () => {
    const [theme, setTheme] = useState("light");

    const themeToggler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <StyledApp>
                <button className="btn-darkmode" onClick={() => themeToggler()}>
                {theme === 'dark' && (
                    <i className="sun"><FontAwesomeIcon icon={faSun} /></i>
                )}
                {theme === 'light' && (
                    <i className="moon"><FontAwesomeIcon icon={faMoon} /></i>
                )}
                </button>
            </StyledApp>
        </ThemeProvider>
    )
}

export default DarkMode
