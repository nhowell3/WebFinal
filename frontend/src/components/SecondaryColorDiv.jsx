import Themes from "../themes/Themes";
import { useLocalStorage } from "@uidotdev/usehooks";

export default function SecondaryColorDiv({children}){
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', 'light');

    return (
        <div style={{color: darkMode ? Themes.dark.secondaryText : Themes.light.secondaryText}}>
            {children}
        </div>
    );
}