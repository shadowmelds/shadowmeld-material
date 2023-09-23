import {getProject} from "@/app_module/data-loader";
import style from "../themes/project.module.scss"

export default async function Project() {

    const data = await fetchData();

    const Style1 = ({project}) => {
        return (
            <div className={`${style.project} ${style.style1}`}>
                <img src={`/asset/project/img/${project.img[0]}`} alt="picture"/>

                <div className={style.project_info}>
                    <h3>{project.title}</h3>
                    <p className={style.content}>{project.content}</p>
                    <a href={project.url}>
                        LEARN MORE
                    </a>
                </div>
            </div>
        )
    }

    const Style2 = ({project}) => {
        return (
            <div className={`${style.project} ${style.style2}`}>
                <img src={`/asset/project/img/${project.img[0]}`} alt="picture"/>

                <div className={style.project_info}>
                    <h3>{project.title}</h3>
                    <p>{project.content}</p>
                    <a href={project.url}>
                        LEARN MORE
                    </a>
                </div>
            </div>
        )
    }

    return (
        <section className="page_animation full_empty">
            <ul>
                {
                    data.projectData && data.projectData.map((project) => (
                        <li key={project.title}>
                            {project.id % 2 === 0 && <Style1 project={project}/>}
                            {project.id % 2 !== 0 && <Style2 project={project}/>}
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}


async function fetchData() {
    let projectData = await getProject()
    return {
        projectData: projectData
    }
}