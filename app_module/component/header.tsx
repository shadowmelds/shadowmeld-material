import {SwitchTheme} from "@/app_module/component/switch-theme";
import Link from "next/link";

export function Header() {

    return (
        <header>
            <nav className="navbar">
                <ul className="avatar">
                    <li>
                        <Link href={"/"}>
                            <img className="round icon_40" src="/img/avatar.png" alt="icon"/>
                        </Link>
                    </li>
                </ul>
                <ul className="themeMode">
                    <li className="tab">
                        <SwitchTheme />
                    </li>
                </ul>
            </nav>
        </header>
    )
}