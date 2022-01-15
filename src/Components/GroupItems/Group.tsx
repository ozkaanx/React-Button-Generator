import * as React from 'react'
import Buttontext from './Buttontext/Buttontext'
import ButonSize from './Butonsize/ButonSize'
import Colorpicker from './ColorPicker/Colorpicker'

import './style.scss'
import Buttonborder from './Buttonborder/Buttonborder'
import ButtonShadow from './ButtonShadow/ButtonShadow'

function Group() {
    return (
        <div className="items-group">
            <div className="group-left">
                <Colorpicker />
                <Buttontext />
                <ButonSize />
                <Buttonborder />
            </div>
            <div className="group-right">
                <ButtonShadow />
            </div>

        </div>
    )
}

export default Group
