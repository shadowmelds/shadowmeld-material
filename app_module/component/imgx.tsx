'use client'

import React from "react";
import style from "../../themes/component/img_warp.module.scss";

export function ImgX({enableScale, baseUrl, img, onClick}) {

    let imgUrl
    if (enableScale) {
        let photoUrl = img.photoUrl
        imgUrl = `${baseUrl}${photoUrl + "!avif"}`
    } else {
        imgUrl = enableScale ? `${baseUrl}${img.photoUrl}` : `${baseUrl}${img.photoUrl}`
    }

    return (
        <div className={style.img_x} onClick={onClick}>
            <i></i>
            <img src={imgUrl} alt={"图片"}/>
        </div>
    )
}