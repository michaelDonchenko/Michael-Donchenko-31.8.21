import { createSlice } from '@reduxjs/toolkit'
import {
  autoComplete,
  currentConditions,
  fiveDaysForcast,
} from '../actions/weatherActions'

const initialState = {
  cityId: '215854',
  loading: false,
  error: null,
  currentConditions: null,
  fiveDaysForcast: null,
  autoComplete: null,
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],
  units: 'C',
}

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    changeCityId: (state, action) => {
      state.cityId = action.payload
    },
    resetAutoComplete: (state) => {
      state.autoComplete = null
    },
    resetError: (state) => {
      state.error = null
    },
    setFavorites: (state, action) => {
      state.favorites = action.payload
    },
    setUnits: (state, action) => {
      state.units = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      // current conditions
      .addCase(currentConditions.pending, (state, action) => {
        state.loading = true
      })
      .addCase(currentConditions.fulfilled, (state, action) => {
        state.loading = false
        state.currentConditions = action.payload.data
      })
      .addCase(currentConditions.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      // current conditions
      .addCase(fiveDaysForcast.pending, (state, action) => {
        state.loading = true
      })
      .addCase(fiveDaysForcast.fulfilled, (state, action) => {
        state.loading = false
        state.fiveDaysForcast = action.payload.data
      })
      .addCase(fiveDaysForcast.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      // get aouto complete
      .addCase(autoComplete.pending, (state, action) => {
        state.loading = true
      })
      .addCase(autoComplete.fulfilled, (state, action) => {
        state.loading = false
        state.autoComplete = action.payload.data
      })
      .addCase(autoComplete.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export const {
  changeCityId,
  resetAutoComplete,
  resetError,
  setFavorites,
  setUnits,
} = weatherSlice.actions

export default weatherSlice.reducer
