'use client';
import {switchTheme} from "../utils";

export function SwitchTheme() {
    return (
        <button className="action_icon"
                id="switchTheme"
                name="Enable dark theme"
                title="启用深色主题"
                aria-label="启用深色主题"
                onClick={() => switchTheme()}>
            <img className="light-mode" src="/img/light_mode_white_24dp.svg"/>
            <img className="dark-mode" src="/img/dark_mode_black_24dp.svg"/>
        </button>
    )
}