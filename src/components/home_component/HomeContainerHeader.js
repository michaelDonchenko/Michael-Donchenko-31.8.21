import React from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core'
import Brightness5Icon from '@material-ui/icons/Brightness5'
import Brightness3Icon from '@material-ui/icons/Brightness3'
import Loader from '../Loader'
import CurrentConditionHeader from './CurrentConditionHeader'
import FavoritesSection from './FavoritesSection'
import { useSelector } from 'react-redux'
import unitsConverter from '../../utils/unitsConverter'

const styles = makeStyles({
  dayTimeIcon: {
    color: 'yellow',
    fontSize: '80px',
    padding: '0.6rem',
  },

  weatherText: {
    margin: '2rem 0',
  },

  flexCenter: {
    display: 'flex',
    margin: '1.5rem 0',
    justifyContent: 'center',
  },

  flexStart: {
    display: 'flex',
    margin: '1.5rem 0',
    justifyContent: 'start',
  },

  flexColumnCenter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '1.5rem 0',
  },
})

const HomeContainerHeader = ({ data }) => {
  const { units } = useSelector((state) => state.weather)
  const { width } = useSelector((state) => state.width)
  const classes = styles()

  function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1)
  }

  if (!data) {
    return <Loader />
  }

  const {
    IsDayTime,
    Temperature: { Metric },
    WeatherText,
    WeatherIcon,
    Link,
  } = data

  return (
    <div>
      <div>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <div
              className={width < 600 ? classes.flexCenter : classes.flexStart}
            >
              {IsDayTime ? (
                <Brightness5Icon className={classes.dayTimeIcon} />
              ) : (
                <Brightness3Icon className={classes.dayTimeIcon} />
              )}
              <div>
                <Typography variant="h5">
                  {capitalize(Link.split('/')[5])}
                </Typography>
                <Typography variant="h6">
                  {units === 'C'
                    ? `${Metric.Value} °C`
                    : `${unitsConverter(Metric.Value)} °F`}
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.flexColumnCenter}>
            <FavoritesSection />
          </Grid>
        </Grid>
      </div>

      <CurrentConditionHeader
        WeatherIcon={WeatherIcon}
        WeatherText={WeatherText}
      />
    </div>
  )
}

export default HomeContainerHeader
