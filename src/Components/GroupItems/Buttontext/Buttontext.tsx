import * as React from 'react'
import { changeText, changeBold, changeFont } from '../../../redux/Slice/btnTextSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/Store/store'
import './style.scss'

function Btntext() {
    const dispatch = useAppDispatch();
    const buttonText = useAppSelector(state => state.buttonText)

    const selectBold = () => {
        dispatch(changeBold(!buttonText.textBold))
    }

    const selectFont = (e: React.ChangeEvent<HTMLInputElement | any>) => {
        dispatch(changeFont(e.target.value))
    }


    return (
        <div className='btn-text'>
            <span >Button Text</span>
            <input type="text" placeholder={buttonText.text} onChange={(e) => dispatch(changeText(e.target.value))}></input>
            <div className="btn-checkbox">
                <span className='chckbold'>
                    <input type="checkbox" name="bold" defaultChecked={buttonText.textBold} onChange={selectBold} />
                    <label>bold</label>
                </span>
                <span className='chckfont'>
                    <label>Font-Size</label>
                    <input type="range" min="1" max="30" defaultValue={buttonText.fontSize} onChange={selectFont} />
                    <label>{buttonText.fontSize}</label>
                </span>
            </div>
        </div>
    )
}

export default Btntext
