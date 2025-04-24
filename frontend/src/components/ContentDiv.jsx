import UserPreferences from "../preferences/UserPreferences";
import Themes from "../themes/Themes";

export default function ContentDiv({children, className = '', useSecondaryBg = false, useSecondaryText = false}){
    return (
        <div 
            className={className}
            style={{
                background: (useSecondaryBg ? 
                    (UserPreferences.darkMode ? Themes.dark.secondaryBg : Themes.light.secondaryBg) : 
                    (UserPreferences.darkMode ? Themes.dark.primaryBg : Themes.light.primaryBg)),
                color: (useSecondaryText ?
                    (UserPreferences.darkMode ? Themes.dark.secondaryText : Themes.light.secondaryText) :
                    (UserPreferences.darkMode ? Themes.dark.primaryText : Themes.light.primaryText))
            }} 
        >
            {children}
        </div>
    );
}