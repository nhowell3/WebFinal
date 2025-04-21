import UserPreferences from "../preferences/UserPreferences";

export default function AccentDiv({children}){
    return (
        <div style={{color: UserPreferences.getCurrentTheme().accent}}>
            {children}
        </div>
    );
}