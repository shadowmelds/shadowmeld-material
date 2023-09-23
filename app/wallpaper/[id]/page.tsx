import style from "../../../themes/picture.module.scss"
import Link from "next/link";
import {MaterialButton} from "@/app_module/component/material-button";
import {getWallpaper} from "@/app_module/data-loader";
import {PreviewPicture} from "@/app_module/component/preview-picture";
export default async function Page({params}) {

    let data = await fetchData()
    const wallpaper = data.wallpaperData["wallpaper"][`${params.id}`]

    return (
        <section className={`${style.picture} full_empty page_animation total_toolbar_padding`}>
            <Link title="查看所有壁纸" aria-label="back to wallpaper list" className={style['back-picture-list']} href="/wallpaper" target="_self">← 查看所有壁纸</Link>
            <PreviewPicture picture={wallpaper} type={"wallpaper"} />
        </section>
    )
}

async function fetchData() {

    let wallpaperData = await getWallpaper()

    return {
        wallpaperData: wallpaperData
    }
}