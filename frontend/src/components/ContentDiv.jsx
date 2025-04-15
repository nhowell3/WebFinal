import UserPreferences from "../preferences/UserPreferences";

export default function ContentDiv({children, className = '', useSecondaryBg = false, useSecondaryText = false}){
    return (
        <div 
            className={className}
            style={{
                background: (useSecondaryBg ? 
                    UserPreferences.getCurrentTheme().secondaryBg : 
                    UserPreferences.getCurrentTheme().primaryBg),
                color: (useSecondaryText ?
                    UserPreferences.getCurrentTheme().secondaryText :
                    UserPreferences.getCurrentTheme().primaryText)
            }} 
        >
            {children}
        </div>
    );
}