import { Link } from "react-router-dom";
import UserPreferences from "../preferences/UserPreferences";
import { useState } from "react";
import Themes from "../themes/Themes";

export default function NavLink({children, to = ''}){
    const [textColor, setTextColor] = useState(UserPreferences.darkMode ? Themes.dark.primaryText : Themes.light.primaryText);

    const handleMouseEnter = () => {
        setTextColor(UserPreferences.darkMode ? Themes.dark.accent : Themes.light.accent);
    }

    const handleMouseLeave = () => {
        setTextColor(UserPreferences.darkMode ? Themes.dark.primaryText : Themes.light.primaryText);
    }

    return (
        <>
            <Link 
                className="text-2xl"
                to={to}
            >
                <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{color: textColor}}
                >
                    {children}
                </div>
            </Link> 
        </>
    );
}