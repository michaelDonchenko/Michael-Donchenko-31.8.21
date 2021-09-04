import React from 'react'

const WeatherIcon = ({ icon, smallIcon }) => {
  return icon < 10 ? (
    <img
      style={{ width: smallIcon ? '55px' : '100px' }}
      src={`https://developer.accuweather.com/sites/default/files/0${icon}-s.png`}
      alt="icon"
    />
  ) : (
    <img
      style={{ width: smallIcon ? '55px' : '100px' }}
      src={`https://developer.accuweather.com/sites/default/files/${icon}-s.png`}
      alt="icon"
    />
  )
}

export default WeatherIcon
