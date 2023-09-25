import style from "../../themes/post.module.scss"
import {getPost} from "@/app_module/data-loader";
import Link from "next/link";
export default async function Page() {

    let data = await fetchData()
    return (
        <section className="page_animation full_empty">
            <ul className={style.category}>
                {
                    data.postData && data.postData["category"].map((category) => (
                        <li key={category}>
                            <h4>{category}</h4>
                            <ul className={style.post}>
                                {
                                    data.postData["post"][category].map((post) => (
                                        <li key={post.title}>
                                            <Link href={`/post/${post.url}`}>
                                                <img src={`/asset/post/${post.url}/${post.image}`} alt=""/>
                                                <div className={style.post_info}>
                                                    <h3>{post.title}</h3>
                                                    <p className={style.content}>{post.content}</p>
                                                    <p className={style.date}>
                                                        <span className={`material-icons ${style.icon}`}>calendar_today</span>
                                                        {post.date}
                                                    </p>
                                                </div>
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

async function fetchData() {
    let postData = await getPost()
    return {
        postData: postData
    }
}