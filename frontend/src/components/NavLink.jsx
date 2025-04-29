import { Link } from "react-router-dom";
import { useState } from "react";
import Themes from "../themes/Themes";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useLocation } from "react-router-dom";

export default function NavLink({children, to = '', onClick}){
    const location = useLocation();
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', 'light');
    const [textColor, setTextColor] = useState(darkMode ? Themes.dark.primaryText : Themes.light.primaryText);

    const handleMouseEnter = () => {
        setTextColor(darkMode ? Themes.dark.accent : Themes.light.accent);
    }

    const handleMouseLeave = () => {
        setTextColor(darkMode ? Themes.dark.primaryText : Themes.light.primaryText);
    }

    return (
        <>
            <Link 
                className="text-2xl"
                to={to}
                onClick={onClick}
            >
                <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{color: textColor, textDecorationLine:  '/' + location.pathname.split("/")[1] === to ? 'underline' : ''}}
                >
                    {children}
                </div>
            </Link> 
        </>
    );
}