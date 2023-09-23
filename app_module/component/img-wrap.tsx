'use client'

import React, {useEffect, useState} from "react";
import {ImgX} from "./imgx";
import styleDialog from "../../themes/component/dialog.module.scss";
import style from "../../themes/component/img_warp.module.scss";
import {Dialog} from "@/app_module/component/dialog";
import {MaterialButton} from "@/app_module/component/material-button";
import Link from "next/link";
import {Snackbar} from "@/app_module/component/snackbar";


export function ImgWrap({enableScale, baseUrl, onLoading, imgData}) {

    const [previewPhoto, setPreviewPhoto] = useState(null)
    const [snackbar, setSnackbar] = useState(false)

    useEffect(() => {
        imageView().then(r => {
            onLoading && onLoading(false)
        })
    }, [onLoading, imgData])

    return (

        <div>
            <div id={style.img_wrap}>
                {
                    Object.keys(imgData).map(function(key) {
                        return (
                            <ImgX key={key} enableScale={enableScale} baseUrl={baseUrl} img={imgData[key]} onClick={() => {
                                setPreviewPhoto({
                                    id: key,
                                    ...imgData[key]
                                })
                            }}/>
                        )
                    })
                }

                <div className={style.placeholder}></div>
                <div className={style.placeholder}></div>
                <div className={style.placeholder}></div>
                <div className={style.placeholder}></div>
                <div className={style.placeholder}></div>
                <div className={style.placeholder}></div>
                <div className={style.placeholder}></div>
                <div className={style.placeholder}></div>
                <div className={style.placeholder}></div>
                <div className={style.placeholder}></div>
            </div>

            {previewPhoto != null && <Dialog onClose={() => {setPreviewPhoto(null)}} modal={false}>
                <img className={styleDialog.img} src={previewUrl(enableScale, previewPhoto.photoUrl, baseUrl)}/>
                <h3>{previewPhoto.description}</h3>
                <div>
                    <span>{`日期：${previewPhoto.date}`}</span>
                    <span className={`margin-holder`}></span>
                    {previewPhoto.resolution && <span>{`分辨率：${previewPhoto.resolution}`}</span>}
                    <span className={`margin-holder`}></span>
                    <a href={`${baseUrl}${previewPhoto.photoUrl}`} download={`${previewPhoto.photoUrl}`} onClick={(e)=>{
                        setSnackbar(true)
                        e.stopPropagation()
                    }}>
                        <MaterialButton content='下载原始图片'/>
                    </a>

                    {enableScale ? <Link href={`${baseUrl.replace(/.*\/(.*?)\/(.*?)$/, '$1/$2')}${previewPhoto.id}`} onClick={(e)=>{e.stopPropagation()}}>
                        <MaterialButton content='分享'/>
                    </Link> : null}
                </div>
            </Dialog>}
            {snackbar && <Snackbar content={"已开始下载"} timeout={2000} onClose={() => {setSnackbar(false)}}></Snackbar>}
        </div>
    )
}

function previewUrl(enableScale, photoUrl, baseUrl) {

    if (enableScale) {
        return `${baseUrl}${photoUrl + "!avif"}`
    } else {
        return `${baseUrl}${photoUrl}`
    }
}

async function imageView(): Promise<void> {
    const imgs = document.getElementById(style.img_wrap).getElementsByClassName(style.img_x);
    console.log(imgs.length);
    for (let i = 0; i < imgs.length; i++) {
        imgbox(imgs[i], i, imgs.length - i);
    }
}

function imgbox(obj, i, l): void {
    if (typeof document !== 'undefined') {
        let width = (document.getElementById(style.img_wrap) as HTMLDivElement).clientWidth
        console.log('w' + width)
        const imgSrc = obj.querySelector('img').getAttribute('src')
        getImageWidth(imgSrc, (w, h) => {
            obj.querySelector('i').style.paddingBottom = `${h / w * 100}%`
            obj.style.width = `${w * 200 / h }px`
            obj.style.flexGrow = `${(w * 200) / h}`

            // obj.style.flexBasis = `${(w * (width * 0.14)) / h}px`
        });
    }
}

function getImageWidth(url, callback): void {
    const img = new Image();
    img.src = url;
    if (img.complete) {
        callback(img.width, img.height);
    } else {
        img.onload = () => {
            callback(img.width, img.height);
        };
    }
}