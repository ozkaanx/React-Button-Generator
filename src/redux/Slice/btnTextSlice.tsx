import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { buttonStyle } from '../../type'

const initialState: buttonStyle = {
    background: "#0c0d0d",
    width: 10,
    height: 10,
    text: "Button",
    textBold: false,
    fontSize: 15,
    bordeRadius: 0,
    borderSize: 0,
    borderColor: "#fffff"
}

const buttonTextSlice = createSlice({
    name: 'buttonText',
    initialState,
    reducers: {
        changeBg(state, action: PayloadAction<string>) {
            state.background = action.payload
        },
        changeText(state, action: PayloadAction<string>) {
            state.text = action.payload
        },
        changeBold(state, action: PayloadAction<boolean>) {
            state.textBold = action.payload
        },
        changeFont(state, action: PayloadAction<number>) {
            state.fontSize = action.payload
        },
        changeWidth(state, action: PayloadAction<number>) {
            state.width = action.payload
        },
        changeHeight(state, action: PayloadAction<number>) {
            state.height = action.payload
        },
        changeRadius(state, action: PayloadAction<number>) {
            state.bordeRadius = action.payload
        },
        changeBorder(state, action: PayloadAction<number>) {
            state.borderSize = action.payload
        },
        changeBorderColor(state, action: PayloadAction<string>) {
            state.borderColor = action.payload
        }
    }
})


export const { changeBg, changeText, changeBold, changeFont, changeWidth, changeHeight, changeRadius, changeBorder, changeBorderColor } = buttonTextSlice.actions;
export default buttonTextSlice.reducer;