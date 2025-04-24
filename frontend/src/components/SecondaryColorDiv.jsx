import UserPreferences from "../preferences/UserPreferences";
import Themes from "../themes/Themes";

export default function SecondaryColorDiv({children}){
    return (
        <div style={{color: UserPreferences.darkMode ? Themes.dark.secondaryText : Themes.light.secondaryText}}>
            {children}
        </div>
    );
}