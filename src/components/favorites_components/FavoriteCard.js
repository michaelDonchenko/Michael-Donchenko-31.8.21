import { Paper, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { getCurrentConditions } from '../../api/weatherApi'
import Loader from '../Loader'
import { makeStyles } from '@material-ui/core'
import WeatherIcon from '../../utils/WeatherIcon'
import { useDispatch } from 'react-redux'
import { changeCityId } from '../../redux/reducers/weatherSlice'
import { useHistory } from 'react-router'
import {
  currentConditions as getConditions,
  fiveDaysForcast as getfiveDaysForcast,
} from '../../redux/actions/weatherActions'
import { useSelector } from 'react-redux'
import unitsConverter from '../../utils/unitsConverter'

const styles = makeStyles({
  wrapper: {
    width: '200px',
    margin: '0.8rem',
    padding: '0.4rem',
    minHeight: '200px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    transition: 'all 0.3s linear',
    '&:hover': {
      cursor: 'pointer',
      boxShadow:
        'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
    },
  },

  title: {
    margin: '0.5rem 0 1rem 0',
  },

  degreeSpan: {
    fontWeight: 'bold',
    fontSize: '18px',
    margin: '1rem 0',
  },
})

const FavoriteCard = ({ id }) => {
  const { units } = useSelector((state) => state.weather)
  const classes = styles()
  const dispatch = useDispatch()
  const history = useHistory()
  const [state, setState] = useState({
    loading: true,
    data: null,
    error: null,
  })

  const { loading, error, data } = state

  function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1)
  }

  const getFavorite = async () => {
    try {
      const { data } = await getCurrentConditions(id)
      setState({ ...state, loading: false, data: data })
    } catch (error) {
      console.log(error)
      setState({ ...state, error: 'Error!, something went wrong.' })
    }
  }

  useEffect(() => {
    getFavorite()
  }, [])

  const handleWeatherChange = () => {
    dispatch(changeCityId(id))
    history.push('/')

    dispatch(getConditions(id))
    dispatch(getfiveDaysForcast(id))
  }

  if (loading) {
    return <Loader />
  }

  const {
    Temperature: { Metric },
    WeatherIcon: icon,
    Link,
  } = data[0]

  return (
    <Paper onClick={() => handleWeatherChange()} className={classes.wrapper}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {data && (
        <>
          <Typography className={classes.title} align="center" variant="h6">
            {capitalize(Link.split('/')[5])}
          </Typography>

          <WeatherIcon icon={icon} />

          <span className={classes.degreeSpan}>
            {units === 'C'
              ? `${Metric.Value} °C`
              : `${unitsConverter(Metric.Value)} °F`}
          </span>
        </>
      )}
    </Paper>
  )
}

export default FavoriteCard
