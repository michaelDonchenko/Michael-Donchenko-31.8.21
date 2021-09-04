import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  getAutoComplete,
  getCurrentConditions,
  getFiveDaysForcast,
} from '../../api/weatherApi'

export const currentConditions = createAsyncThunk(
  'weather/currentConditions',
  async (cityId, { rejectWithValue }) => {
    try {
      const response = await getCurrentConditions(cityId)

      return response
    } catch (error) {
      console.log(error)
      return rejectWithValue(error.response.data)
    }
  }
)

export const fiveDaysForcast = createAsyncThunk(
  'weather/fiveDaysForcast',
  async (cityId, { rejectWithValue }) => {
    try {
      const response = await getFiveDaysForcast(cityId)

      return response
    } catch (error) {
      console.log(error)
      return rejectWithValue(error.response.data)
    }
  }
)

export const autoComplete = createAsyncThunk(
  'weather/autoComplete',
  async (text, { rejectWithValue }) => {
    try {
      const response = await getAutoComplete(text)

      return response
    } catch (error) {
      console.log(error)
      return rejectWithValue(error.response.data)
    }
  }
)
