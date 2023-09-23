'use client';

import style from "@/themes/home.module.scss";
import {SVGInject} from "@/app_module/component/svg-inject";
import Link from "next/link";
import {usePathname} from "next/navigation";

export function SkillClip({skill}) {

    return (
        <>

            <style jsx>{`

              .${style.skill}.skill-${skill.id} {
                background-color: transparent;
              }
    
              .${style.skill}.skill-${skill.id} {
                border: 1px solid #707070;
              }
    
              .${style.skill}.skill-${skill.id}:hover, ${style.skill}.skill-${skill.id}.is-hovered {
                border-color: ${skill.border};
                background-color: ${skill.primary};
              }
    
            `}</style>

            <li>
                <span className={`button is_rounded ${style.button} ${style.skill} skill-${skill.id}`}>
                    <span className="svg_24 icon">
                        <SVGInject svgPath={`/img/${skill.icon}`}/>
                    </span>
                    <span>{skill.title}</span>
                </span>
            </li>
        </>
    )
}

export function Tab() {

    const pathname = usePathname();
    const isSelected = (link) => {
        if (link == "/") return style.selected
        else return pathname?.startsWith(link) ? style.selected : undefined
    }

    return (
        <section className={style.tab}>
            <ul>
                <li>
                    <Link className={isSelected(pathname === "/" ? "/" : "none")} href="/">
                        项目
                    </Link>
                </li>
                <li>
                    <Link className={isSelected("/post")} href={"/post"}>
                        短文
                    </Link>
                </li>
                <li>
                    <Link className={isSelected("/photo")} href="/photo">
                        相册
                    </Link>
                </li>
                <li>
                    <Link className={isSelected("/wallpaper")} href="/wallpaper">
                        壁纸
                    </Link>
                </li>
            </ul>
        </section>
    )
}
