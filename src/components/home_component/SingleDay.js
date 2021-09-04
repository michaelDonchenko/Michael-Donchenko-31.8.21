import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import WeatherIcon from '../../utils/WeatherIcon'
import { useSelector } from 'react-redux'
import unitsConverter from '../../utils/unitsConverter'

const styles = makeStyles({
  wrapperDark: {
    padding: '1rem',
    width: '150px',
    margin: '0.6rem',
    minHeight: '160px',
    border: '1px solid gray',
    borderRadius: '0.8rem',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    transition: 'all 0.5s linear',
    '&:hover': {
      backgroundColor: '#00695c',
    },
  },

  wrapperLight: {
    padding: '1rem',
    width: '150px',
    margin: '0.6rem',
    minHeight: '160px',
    border: '1px solid gray',
    borderRadius: '0.8rem',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    transition: 'all 0.5s linear',
    '&:hover': {
      backgroundColor: '#b2dfdb',
    },
  },

  flexDiv: {
    display: 'flex',
    padding: '0.2rem',
    margin: '1rem 0',
  },
})

const SingleDay = ({ data }) => {
  const { units } = useSelector((state) => state.weather)
  const { theme } = useSelector((state) => state.theme)
  const {
    Temperature: { Maximum, Minimum },
    Date,
    Day,
    Night,
  } = data
  const classes = styles()

  return (
    <div className={theme ? classes.wrapperDark : classes.wrapperLight}>
      <Typography align="center" variant="subtitle1">
        {Date.slice(5, 10)}
      </Typography>

      <div className={classes.flexDiv}>
        <WeatherIcon icon={Day.Icon} smallIcon />{' '}
        <WeatherIcon icon={Night.Icon} smallIcon />
      </div>

      <Typography align="center" variant="subtitle1">
        {units === 'C'
          ? `${Maximum.Value} / ${Minimum.Value} °C`
          : `${unitsConverter(Maximum.Value)} / ${unitsConverter(
              Minimum.Value
            )} °F`}
      </Typography>
    </div>
  )
}

export default SingleDay
