import Themes from "../themes/Themes";

export default class UserPreferences {
    static theme = 'light';

    static getCurrentTheme() {
        return Themes[this.theme];
    }

    static setCurrentTheme(newTheme) {
        this.theme = newTheme;
    }
}