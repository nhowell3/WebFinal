import { Link } from "react-router-dom";
import UserPreferences from "../preferences/UserPreferences";
import { useState } from "react";

export default function NavLink({children, to = ''}){
    const [textColor, setTextColor] = useState(UserPreferences.getCurrentTheme().primaryText);

    const handleMouseEnter = () => {
        setTextColor(UserPreferences.getCurrentTheme().accent);
    }

    const handleMouseLeave = () => {
        setTextColor(UserPreferences.getCurrentTheme().primaryText);
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