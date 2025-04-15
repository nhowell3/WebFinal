import UserPreferences from "../preferences/UserPreferences";

export default function SecondaryColorDiv({children}){
    return (
        <div style={{color: UserPreferences.getCurrentTheme().secondaryText}}>
            {children}
        </div>
    );
}