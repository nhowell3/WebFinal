import UserPreferences from "../preferences/UserPreferences";

export default function DarkModeToggle({}){
    const handleChange = (e) => {
        let value = e.target.checked;
        if (value){
            UserPreferences.setCurrentTheme('dark');
        } else {
            UserPreferences.setCurrentTheme('light');
        }
    }

    return (
        <>
            <input
                type="checkbox"
                onChange={handleChange}
            />
        </>
    );
}