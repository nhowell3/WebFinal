export default class UserPreferences {
    static darkMode = true;

    static async setDarkMode(newDarkMode) {
        this.darkMode = newDarkMode;
        localStorage.setItem("darkMode", this.darkMode);
        // window.location.reload();
    }

    static loadSettings() {
        this.darkMode = localStorage.getItem("darkMode");
        if (!this.darkMode) {
            this.darkMode = false
        }
    }
}