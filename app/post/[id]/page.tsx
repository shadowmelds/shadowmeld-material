import {getMarkdown} from "@/app_module/data-loader";
import {ClientContent} from "@/app/post/[id]/client-content";
import ScrollToTop from "@/app_module/component/scroll-to-top";
import style from "../../../themes/post_id.module.scss"

export default async function Page({params}) {

    const url = `/asset/post/${params.id}/${params.id}.md`
    const markdown = await getMarkdown(`${params.id}`)

    return (
        <section className={`total_toolbar_padding`}>
            <div className="full_empty">
                <ClientContent url={url} post={markdown}/>
            </div>
        </section>
    )
}