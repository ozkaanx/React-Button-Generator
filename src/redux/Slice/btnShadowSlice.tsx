import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { buttonShadow } from '../../type'


const initialState: buttonShadow = {
    shadowColor: "#ffffff",
    yoffset: 0,
    xoffset: 0,
    blur: 10,
    spread: 10,
}


const buttonShadowSlice = createSlice({
    name: "buttonShadow",
    initialState,
    reducers: {
        shadowColor(state, action: PayloadAction<string>) {
            state.shadowColor = action.payload
        },
        changeYoffset(state, action: PayloadAction<number>) {
            state.yoffset = action.payload
        },
        changeXoffset(state, action: PayloadAction<number>) {
            state.xoffset = action.payload
        },
        changeBlur(state, action: PayloadAction<number>) {
            state.blur = action.payload
        },
        changeSpread(state, action: PayloadAction<number>) {
            state.spread = action.payload
        }

    }
})

export const { shadowColor, changeYoffset, changeXoffset, changeBlur, changeSpread } = buttonShadowSlice.actions
export default buttonShadowSlice.reducer