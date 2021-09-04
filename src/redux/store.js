import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './reducers/themeSlice'
import weatherSlice from './reducers/weatherSlice'
import widthSlice from './reducers/widthSlice'

export const store = configureStore({
  reducer: { weather: weatherSlice, theme: themeSlice, width: widthSlice },
})
