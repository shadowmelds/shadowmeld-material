import {getPhoto} from "@/app_module/data-loader";
import style from "@/themes/picture.module.scss";
import Link from "next/link";
import {PreviewPicture} from "@/app_module/component/preview-picture";

export default async function Page({params}) {

    let data = await fetchData()
    const photo = data.photoData[`${params.id}`]

    return (
        <section className={`${style.picture} full_empty page_animation total_toolbar_padding`}>
            <Link title="查看所有照片" aria-label="back to wallpaper list" className={style['back-picture-list']} href="/photo" target="_self">← 查看所有壁纸</Link>
            <PreviewPicture picture={photo} type={"photo"} />
        </section>
    )
}


async function fetchData() {
    let photoData = await getPhoto()
    return {
        photoData: photoData
    }
}