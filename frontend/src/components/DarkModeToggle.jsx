import UserPreferences from "../preferences/UserPreferences";

export default function DarkModeToggle({}){
    const handleChange = async (e) => {
        let value = e.target.checked;
        if (value){
            await UserPreferences.setDarkMode(true);
        } else {
            await UserPreferences.setDarkMode(false);
        }
        // window.location.reload();
    }

    return (
        <>
            <input
                type="checkbox"
                onChange={handleChange}
                defaultChecked={UserPreferences.darkMode === 'true'}
            />
        </>
    );
}