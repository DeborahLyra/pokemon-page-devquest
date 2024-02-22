import { createContext, useState } from "react";

export const themes = {
    light: {
        color: "#000000",
        background: "#F5F5F5",
        btnBackground:'#FFFAFA'
    },
    dark: {
        color: "#ffffff",
        background: "#808080",
        btnBackground: "#696969",
    }
}

export const ThemeContext = createContext({});

export const ThemeProvider = (props) => {

    const  [ theme, setTheme ]  = useState(themes.light)

    return(
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}