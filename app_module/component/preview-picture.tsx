'use client'

import style from "@/themes/picture.module.scss";
import {MaterialButton} from "@/app_module/component/material-button";
import React, {useState} from "react";
import {Snackbar} from "@/app_module/component/snackbar";

export function PreviewPicture({picture, type}) {

    const [snackbar, setSnackbar] = useState(false)

    return (
        <>
            <img className={style['picture-preview']} src={
                `/asset/${type}/${picture.photoUrl}!avif`
            } alt={"previewPhoto.description"}/>

            <div className={style['picture-info']}>
                <h3>{picture.description}</h3>
                <div>
                    <span>{`日期：${picture.date}`}</span>
                    <span className={`margin-holder`}></span>
                    {picture.resolution && <span>{`分辨率：${picture.resolution}`}</span>}
                    <span className={`margin-holder`}></span>
                    <a href={`/asset/${type}/${picture.photoUrl}`} download={`${picture.photoUrl}`} onClick={(e)=>{
                        setSnackbar(true)
                        e.stopPropagation()
                    }}>
                        <MaterialButton content='下载原始图片'/>
                    </a>
                </div>
            </div>
            {snackbar && <Snackbar content={"已开始下载"} timeout={2000} onClose={() => {setSnackbar(false)}}></Snackbar>}
        </>
    )
}