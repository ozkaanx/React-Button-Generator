import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import btnShadowSlice from '../Slice/btnShadowSlice';
import buttonTextSlice from '../Slice/btnTextSlice';


export const store = configureStore({
  reducer: {
    buttonText: buttonTextSlice,
    buttonShadow : btnShadowSlice,
    
  },
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
