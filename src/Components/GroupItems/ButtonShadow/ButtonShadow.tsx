import * as React from 'react'
import { ChromePicker } from 'react-color'
import { changeBlur, changeSpread, changeXoffset, changeYoffset, shadowColor } from '../../../redux/Slice/btnShadowSlice'
import { useAppDispatch, useAppSelector } from '../../../redux/Store/store'
import './style.scss'
import Bordercolor from '../BorderColor/Bordercolor'

function ButtonShadow() {

    const dispatch = useAppDispatch()
    const btnShadow = useAppSelector(state => state.buttonShadow)

    const horizontalPosition = (e: React.ChangeEvent<HTMLInputElement | any>) => {
        dispatch(changeYoffset(e.target.value))
    }
    const veriticalPosition = (e: React.ChangeEvent<HTMLInputElement | any>) => {
        dispatch(changeXoffset(e.target.value))
    }
    const btnBlur = (e: React.ChangeEvent<HTMLInputElement | any>) => {
        dispatch(changeBlur(e.target.value))
    }
    const btnSpread = (e: React.ChangeEvent<HTMLInputElement | any>) => {
        dispatch(changeSpread(e.target.value))
    }
    return (
        <div className="shadow">
            <div className="color-group">
                <div className='shadow-color'>
                    <span>Box Shadow Color</span>
                    <ChromePicker color={btnShadow.shadowColor}
                        onChange={(e) => dispatch(shadowColor(e.hex))} />
                </div>
                <Bordercolor/>
            </div>
            <div className="shadow-position">
                <span className='shadow-range'>
                    <label style={{ fontSize: "13px" }}>Horizontal Position</label>
                    <input type="range" min="-40" max="40" defaultValue={btnShadow.yoffset} onChange={horizontalPosition} />
                    <label className='shadowlabel'>{btnShadow.yoffset}</label>
                </span>
                <span className='shadow-range'>
                    <label style={{ fontSize: "13px" }}>Vertical Position</label>
                    <input type="range" min="-40" max="40" defaultValue={btnShadow.xoffset} onChange={veriticalPosition} />
                    <label className='shadowlabel'>{btnShadow.xoffset}</label>
                </span>
                <span className='shadow-range'>
                    <label style={{ fontSize: "13px" }}>Blur Radius</label>
                    <input type="range" min="0" max="50" defaultValue={btnShadow.blur} onChange={btnBlur} />
                    <label className='shadowlabel'>{btnShadow.blur}</label>
                </span>
                <span className='shadow-range'>
                    <label style={{ fontSize: "13px" }}>Spread Radius</label>
                    <input type="range" min="0" max="50" defaultValue={btnShadow.spread} onChange={btnSpread} />
                    <label className='shadowlabel'>{btnShadow.spread}</label>
                </span>
            </div>
        </div>
    )
}

export default ButtonShadow

