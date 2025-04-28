import Themes from "../themes/Themes";
import { useLocalStorage } from "@uidotdev/usehooks";

export default function ContentDiv({children, className = '', useSecondaryBg = false, useSecondaryText = false}){
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', 'light');

    return (
        <div 
            className={className}
            style={{
                background: (useSecondaryBg ? 
                    (darkMode ? Themes.dark.secondaryBg : Themes.light.secondaryBg) : 
                    (darkMode ? Themes.dark.primaryBg : Themes.light.primaryBg)),
                color: (useSecondaryText ?
                    (darkMode ? Themes.dark.secondaryText : Themes.light.secondaryText) :
                    (darkMode ? Themes.dark.primaryText : Themes.light.primaryText))
            }} 
        >
            {children}
        </div>
    );
}