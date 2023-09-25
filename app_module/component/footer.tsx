import {getFriend, getSocial} from "@/app_module/data-loader";
import {SocialSvgIcon} from "@/app_module/component/social-svg-icon";

export async function Footer() {

    const data = await fetchData();

    return (
        <footer>
            <div className="navigation">
                <ul>
                    {navigationItem.map((navItem) => (
                        <li key={navItem.name} >
                            <a href={navItem.href}>{navItem.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="social">
                <ul>
                    {data.socialData.map((socialItem) =>
                        (
                            <li key={socialItem.name}>
                                <SocialSvgIcon socialItem={socialItem} />
                            </li>
                        ))}

                </ul>
            </div>

            <div className="friend">
                <ul>Source ·&nbsp;
                    {data.friendData.map((friendItem) =>
                        (
                            <li key={friendItem.name}>
                                <a className="friend" href={friendItem.link}
                                   target="_blank" rel="noreferrer">{friendItem.name}</a>
                            </li>
                        ))}
                </ul>
            </div>

        </footer>
    )
}

export interface NavigationData {
    name: string,
    href: string
}
export const navigationItem: NavigationData[] = [
    {
        name: "关于",
        href: "/post/about/about"
    },
    {
        name: "短文",
        href: "/post"
    },
    {
        name: "照片",
        href: "/photo"
    },
    {
        name: "壁纸",
        href: "/wallpaper"
    },
    {
        name: "组件",
        href: "/component"
    },
]

async function fetchData() {

    let socialData = await getSocial()
    let friendData = await getFriend()

    return {
        socialData: socialData,
        friendData: friendData
    }
}