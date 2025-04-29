import Themes from "../themes/Themes";
import { useLocalStorage } from "@uidotdev/usehooks";

export default function AccentDiv({children, className}){
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', 'light');
    
    return (
        <div style={{color: darkMode ? Themes.dark.accent : Themes.light.accent}} className={className}>
            {children}
        </div>
    );
}