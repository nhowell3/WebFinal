import UserPreferences from "../preferences/UserPreferences";
import Themes from "../themes/Themes";

export default function AccentDiv({children}){
    return (
        <div style={{color: UserPreferences.darkMode ? Themes.dark.accent : Themes.light.accent}}>
            {children}
        </div>
    );
}