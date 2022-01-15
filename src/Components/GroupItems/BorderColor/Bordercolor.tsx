import * as React from 'react'
import { ChromePicker } from 'react-color'
import { changeBorderColor } from '../../../redux/Slice/btnTextSlice'
import { useAppDispatch, useAppSelector } from '../../../redux/Store/store'

function Bordercolor() {
    const dispahtch = useAppDispatch();
    const borderColor = useAppSelector(state => state.buttonText.borderColor)
    return (
        <div className="border-color">
            <span> Border Color</span>
            <ChromePicker color={borderColor}
                onChange={(e) => dispahtch(changeBorderColor(e.hex))} />
        </div>
    )
}

export default Bordercolor
