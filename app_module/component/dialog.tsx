'use client'

import style from "../../themes/component/dialog.module.scss";
import {SVGInject} from "./svg-inject";

export function Dialog({children, onClose, modal}) {

    let modalClick = () => {
        if (!modal) {
            onClose.call()
        }
    }

    let click = () => {

    }
    return (
        <div className={`${style['dialog-mask']} ${style.dialog_mask_in}`} onClick={modalClick}>
            <div className={`${style.dialog} ${style.ease_in}`}>

                <button className='action_icon'
                        title="Close"
                        aria-label="Close"
                        onClick={onClose}>
                    <SVGInject svgPath={`/img/close_black_24dp.svg`}/>
                </button>
                <div className={style['dialog-cta']}>
                    {children}
                </div>
            </div>
        </div>
    )
}