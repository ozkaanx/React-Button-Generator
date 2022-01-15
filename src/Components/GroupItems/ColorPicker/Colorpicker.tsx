import * as React from 'react'
import { TwitterPicker } from 'react-color'
import { changeBg } from '../../../redux/Slice/btnTextSlice'
import { useAppDispatch, useAppSelector } from '../../../redux/Store/store'
import './style.scss'

function Colorpicker() {
    const dispatch = useAppDispatch()
    const bgColor = useAppSelector(state => state.buttonText.background)
    return (
        <div className="color-picker">
            <span>Background Color</span>
            <TwitterPicker color={bgColor}
             onChange={(e) => dispatch(changeBg(e.hex))} />
        </div>


    )
}

export default Colorpicker
