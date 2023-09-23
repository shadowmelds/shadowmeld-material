import {getWallpaper} from "@/app_module/data-loader";
import {ImgWrap} from "@/app_module/component/img-wrap";

export default async function Page() {
    let data = await fetchData()
    return (
        <section className="page_animation full_empty">
            <ImgWrap enableScale={true} baseUrl={"/asset/wallpaper/"} onLoading={null} imgData={data.wallpaperData["wallpaper"]}/>
        </section>
    )
}

async function fetchData() {

    let wallpaperData = await getWallpaper()

    return {
        wallpaperData: wallpaperData
    }
}