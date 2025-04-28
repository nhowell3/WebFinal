export default function DarkModeToggle({}){
    const handleChange = async (e) => {
        let value = e.target.checked;
        console.log(localStorage.getItem("darkMode"));
        if (value){
            localStorage.setItem("darkMode", 'true');
        } else {
            localStorage.setItem("darkMode", 'false');
        }
        window.location.reload();
    }

    return (
        <>
            <input
                type="checkbox"
                onChange={handleChange}
                defaultChecked={localStorage.getItem("darkMode") === 'true'}
            />
        </>
    );
}