import * as React from 'react'
import { changeHeight, changeWidth } from '../../../redux/Slice/btnTextSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/Store/store'
import './style.scss'



function ButonSize() {
    const dispatch = useAppDispatch();
    const btnSize = useAppSelector(state => state.buttonText)


    const selectWidth = (e: React.ChangeEvent<HTMLInputElement | any>) => {
        dispatch(changeWidth(e.target.value))
    }
    const selectHeight = (e: React.ChangeEvent<HTMLInputElement | any>) => {
        dispatch(changeHeight(e.target.value))
    }
    return (
        <div className='btn-size'>
            <span >Button Size</span>
            <span className='chckWidth'>
                <label style={{ fontSize: "13px" }}>Button-Width</label>
                <input type="range" min="0" max="100" defaultValue={btnSize.width} onChange={selectWidth} />
                <label className='widthlabel'>{btnSize.width}</label>
            </span>
            <span className='chckWidth'>
                <label style={{ fontSize: "13px" }}>Button-Height</label>
                <input type="range" min="0" max="50" defaultValue={btnSize.height} onChange={selectHeight} />
                <label className='widthlabel'>{btnSize.height}</label>
            </span>
        </div>
    )
}

export default ButonSize
