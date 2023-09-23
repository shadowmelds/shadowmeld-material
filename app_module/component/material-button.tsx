import style from "../../themes/component/material_button.module.scss";
export function MaterialButton({content, onClick = null}) {
    return (
        <button className={`${style['material-button']} ${style.raised}`} onClick={onClick}>
            {content}
        </button>
    )
}