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
            <div className="flex gap-2 align-middle">
                <p className="self-center whitespace-nowrap">Dark Mode:</p>
                <input
                    type="checkbox"
                    onChange={handleChange}
                    className="translate-y-0.25"
                    defaultChecked={localStorage.getItem("darkMode") === 'true'}
                />
            </div>
        </>
    );
}