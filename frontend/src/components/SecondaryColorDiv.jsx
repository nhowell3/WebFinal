import Themes from "../themes/Themes";
import { useLocalStorage } from "@uidotdev/usehooks";

export default function SecondaryColorDiv({children, className}){
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', 'light');

    return (
        <div className={className} style={{color: darkMode ? Themes.dark.secondaryText : Themes.light.secondaryText}}>
            {children}
        </div>
    );
}