"use client"
import React, {useEffect, useState} from "react";
import style from "../../../themes/post_id.module.scss";
import {HotLoad} from "@/app_module/hot-load";
import Link from "next/link";
import {usePathname} from "next/navigation";

export function ClientContent({url, post}) {

    const [loadDir, setLoadDir] = useState(false)
    const [update, setUpdate] = useState(false)
    const [postData, setPostData] = useState(post)

    const initMarkdown = (postData) => {

        const hljs = require('highlight.js');
        const md = require('markdown-it')({
            html: true,
            linkify: true,
            typographer: true,
            highlight: function (str, lang) {
                // 添加这两行才能正确显示 <>
                str = str.replace(/&lt;/g, "<");
                str = str.replace(/&gt;/g, ">");
                if (lang && hljs.getLanguage(lang)) {
                    try {
                        return '<pre class="hljs"><code>' +
                            hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
                            '</code></pre>';
                    } catch (__) {}
                }
                return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
            }
        }).use(require('markdown-it-deflist'));

        addTargetBlank(md)

        // 以免之前有内容
        document.querySelector('.md-content').innerHTML = ""
        const result = md.render(postData);
        document.querySelector('.md-content').innerHTML = result

        setLoadDir(true)
    }

    const addTargetBlank = (md) => {

        var defaultRender = md.renderer.rules.link_open || function(tokens, idx, options, env, self) {
            return self.renderToken(tokens, idx, options);
        };
        md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
            // If you are sure other plugins can't add `target` - drop check below
            var aIndex = tokens[idx].attrIndex('target');

            if (aIndex < 0) {
                tokens[idx].attrPush(['target', '_blank']); // add new attribute
            } else {
                tokens[idx].attrs[aIndex][1] = '_blank';    // replace value of existing attr
            }

            // pass token to default renderer.
            return defaultRender(tokens, idx, options, env, self);
        };
    }

    useEffect(() => {

        if (loadDir == false) {
            if (typeof document !== 'undefined') {
                initMarkdown(postData)
            }
        }
    })

    useEffect(() => {
        if (update == true) {
            if (typeof document !== 'undefined') {
                initMarkdown(postData)
            }
        }
        setUpdate(false)
    }, [update])


    useEffect(()=>{
        setPostData(post)
    }, [post])

    const updatePost = (postData) => {
        if (typeof document !== 'undefined') {
            initMarkdown(postData)
        }
    }

    return (

        <>
            <div className={`${style['posts-content']}`}>
                <div>
                    <div className={style.post}>

                        <div className={`app-container ${style['app-container']}`}>

                            <Link title="返回短文列表" aria-label="back to blog posts list" className={style['back-posts-list']} href="/post" target="_self">← 返回短文列表</Link>
                            <div className={`md-content`} id="md-content"/>
                        </div>

                    </div>
                </div>

                <div className="floating-button-cta">

                    <button className={`floating-action-button floating-button-menu ${style['floating-button-menu']}`} id='floating-button-menu'>
                        <span className="material-icons float-icon">menu</span>
                    </button>

                    <button className="floating-action-button" id="floating-button-top">
                        <span className="material-icons float-icon">expand_less</span>
                    </button>
                </div>

            </div>
            <HotLoad setPost={updatePost} params={url} />
        </>
    )
}

function showMDContent() {
    setTimeout(function () {
        const mdContent = document.getElementById('md-content')
        mdContent.style.visibility = 'visible';
    }, 2000)
}