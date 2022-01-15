import * as React from 'react'
import { useAppSelector } from '../../../redux/Store/store'
import './button.scss'

function Button() {
    const buttonStyle = useAppSelector(state => state.buttonText)
    const btnShadow = useAppSelector(state => state.buttonShadow)
    return (
        <>
            <button id="newBtn" style={{
                cursor: "pointer", color: "white", display: "flex", alignItems: "center",
                justifyContent: "center",
                backgroundColor: buttonStyle.background,
                fontWeight: buttonStyle.textBold ? "bold" : "normal",
                fontSize: buttonStyle.fontSize + `px`,
                padding: `${buttonStyle.height}px ${buttonStyle.width}px`,
                borderRadius: buttonStyle.bordeRadius + 'px',
                boxShadow: `${btnShadow.yoffset}px ${btnShadow.xoffset}px ${btnShadow.blur}px ${btnShadow.spread}px ${btnShadow.shadowColor}`,
                border: `${buttonStyle.borderSize}px solid ${buttonStyle.borderColor}`
            }}>
                {buttonStyle.text}
            </button>

        </>
    )


}

export default Button
