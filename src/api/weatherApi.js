import axios from 'axios'
const baseUrl = 'http://dataservice.accuweather.com'

const apiKey = process.env.REACT_APP_API_KEY

export const getAutoComplete = async (text) =>
  await axios.get(
    `${baseUrl}/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${text}`
  )

export const getCurrentConditions = async (cityId) =>
  await axios.get(`${baseUrl}/currentconditions/v1/${cityId}?apikey=${apiKey}`)

export const getFiveDaysForcast = async (cityId) =>
  await axios.get(
    `${baseUrl}/forecasts/v1/daily/5day/${cityId}?apikey=${apiKey}&metric=true`
  )
