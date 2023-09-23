import {usePathname} from "next/navigation";
import style from "@/themes/home.module.scss";
import {SkillClip, Tab} from "@/app/client-content";
import {SVGInject} from "@/app_module/component/svg-inject";

export function Overview({data}) {

    const Feature = () => {

        return (
            <section className={style.feature}>
                <div className={style.feature_info}>
                    { data.featureData["hello_1"] && <h1>{data.featureData["hello_1"]}</h1>}
                    { data.featureData["hello_2"] && <h1>{data.featureData["hello_2"]}</h1>}
                    <p>{ data.featureData["summary"] }</p>
                    <ul>
                        {data.socialData && data.socialData.map((social) => (
                            <li key={social.name}>
                                <a href={social.url}>
                                <span className="svg_36">
                                    <SVGInject svgPath={`/img/${social.icon}`}/>
                                </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <img className={`round ${style.avatar}`} src={`/img/${data.featureData["avatar"]}`} alt="avatar"/>
            </section>
        )
    }

    const Skill = () => {

        return (
            <section className={style.skill}>
                <ul>
                    {data.skillData && data.skillData.map((skill) => (
                        <SkillClip key={skill.title} skill={skill}/>
                    ))}
                </ul>
            </section>
        )
    }

    return (

        <>
            <div className={style.column}>
                <Feature></Feature>
                <Skill></Skill>
            </div>

            <Tab/>
        </>
    )
}