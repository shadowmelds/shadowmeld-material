import {SVGInject} from "@/app_module/component/svg-inject";

export function SocialSvgIcon({socialItem}) {

    // if (typeof document !== "undefined") {
    //     setupPathColor()
    // }

    return (
        <div className="social-logo-layout">
            <a className="social-icon" target="_blank"
               href={socialItem.url} rel="noreferrer">

                <span className="svg_24">
                    <SVGInject svgPath={`/img/${socialItem.icon}`} />
                </span>
            </a>
        </div>
    )
}
// function setupPathColor() {
//
//     const style = document.createElement('style');
//     document.head.appendChild(style);
//     const sheet = style.sheet;
//     sheet.insertRule('.social-logo:hover path{fill: white;}');
// }