import * as React from 'react'
import { changeBorder, changeRadius } from '../../../redux/Slice/btnTextSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/Store/store';
import './style.scss'


function Buttonborder() {
    const dispatch = useAppDispatch();
    const btnRadius = useAppSelector(state => state.buttonText)

    const selectRadius = (e: React.ChangeEvent<HTMLInputElement | any>) => {
        dispatch(changeRadius(e.target.value))
    }

    const selectSize = (e: React.ChangeEvent<HTMLInputElement | any>) => {
        dispatch(changeBorder(e.target.value))
    }

    return (
        <div className='btn-border'>
            <span >Button Border</span>
            <div className="border-group">
                <span className='rangeborder'>
                    <label style={{ fontSize: "13px" }}>Border-Radius</label>
                    <input type="range" min="0" max="40" defaultValue={btnRadius.bordeRadius} onChange={selectRadius} />
                    <label className='radiuslabel'>{btnRadius.bordeRadius}</label>
                </span>
                <span className='rangeborder'>
                    <label style={{ fontSize: "13px" }}>Border-Size</label>
                    <input type="range" min="0" max="12" defaultValue={btnRadius.borderSize} onChange={selectSize} />
                    <label className='borderlabel'>{btnRadius.borderSize}</label>
                </span>
            </div>
        </div>
    )
}


export default Buttonborder
