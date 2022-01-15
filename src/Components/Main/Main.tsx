import * as React from 'react'
import Codeout from '../GroupItems/Codeout/Codeout'
import Button from './Button/Button'
import './style.scss'

function Main() {
    return (
        <div className='main-section'>
            <Button />
            <Codeout/>
        </div>
    )
}

export default Main
