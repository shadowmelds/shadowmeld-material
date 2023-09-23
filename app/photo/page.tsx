import {ImgWrap} from "@/app_module/component/img-wrap";
import {getPhoto} from "@/app_module/data-loader";

export default async function Page() {

    let data = await fetchData()
    return (
        <section className="page_animation full_empty">
            <ImgWrap enableScale={true} baseUrl={"/asset/photo/"} onLoading={null} imgData={data.photoData}/>
        </section>
    )
}

async function fetchData() {
    let photoData = await getPhoto()
    return {
        photoData: photoData
    }
}