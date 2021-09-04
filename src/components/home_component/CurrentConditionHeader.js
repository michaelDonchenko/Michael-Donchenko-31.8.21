import React from 'react'
import { makeStyles } from '@material-ui/core'
import WeatherIcon from '../../utils/WeatherIcon'

const styles = makeStyles({
  flexDiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '1.5rem',
  },
  text: {
    display: 'inline',
  },
})

const CurrentConditionHeader = ({ WeatherText, WeatherIcon: icon }) => {
  const classes = styles()
  return (
    <div className={classes.flexDiv}>
      <h1 className={classes.text}>{WeatherText}</h1>
      {<WeatherIcon icon={icon} />}
    </div>
  )
}

export default CurrentConditionHeader
