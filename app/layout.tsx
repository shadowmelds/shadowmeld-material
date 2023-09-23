import "../themes/globals.scss"
import {cookies} from "next/headers";
import {LoadTheme} from "@/app_module/load-theme";
import {Header} from "@/app_module/component/header";
import {Footer} from "@/app_module/component/footer";
import React from "react";
import {getFeature, getFriend, getSkill, getSocial} from "@/app_module/data-loader";
import {LayoutProvider} from "@/app/layout-provider";
import {Overview} from "@/app/overview";

export default async function RootLayout({ children }: {
    children: React.ReactNode;
}) {

    const nextCookies = cookies();
    const data = await fetchData();

    const mode = nextCookies.get('DarkMode')
    let theme = 'light'
    if (mode != undefined) {
        theme = mode.value === '1' ?'dark':'light'
    }

    return (
        <html lang="en" className={theme}>
        <body>
        <div id="__next">
            <div className="content">
                <Header></Header>

                <LayoutProvider>
                    <Overview data={data}/>
                </LayoutProvider>
                <main>
                    {children}
                </main>
                <Footer></Footer>
            </div>
        </div>
        </body>
        <LoadTheme />
        </html>
    )
}


async function fetchData() {
    let featureData = await getFeature()
    let skillData = await getSkill()
    let socialData = await getSocial()


    return {
        featureData: featureData,
        skillData: skillData,
        socialData: socialData
    };
}