import { Paper } from '@material-ui/core'
import React, { useEffect } from 'react'
import HomeContainerHeader from './HomeContainerHeader'
import { makeStyles } from '@material-ui/core'
import FiveDaysForcastContainer from './FiveDaysForcastContainer'
import { useDispatch, useSelector } from 'react-redux'
import {
  currentConditions as getConditions,
  fiveDaysForcast as getfiveDaysForcast,
} from '../../redux/actions/weatherActions'

const styles = makeStyles({
  wrapper: {
    padding: '1rem',
    marginBottom: '2rem',
  },
})

const HomeContainer = () => {
  const classes = styles()
  const weatherState = useSelector((state) => state.weather)
  const { currentConditions, cityId, loading, fiveDaysForcast } = weatherState
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getConditions(cityId))
  }, [])

  useEffect(() => {
    dispatch(getfiveDaysForcast(cityId))
  }, [])

  return loading ? (
    <p>loading...</p>
  ) : (
    <Paper elevation={4} className={classes.wrapper}>
      <HomeContainerHeader data={currentConditions && currentConditions[0]} />
      <FiveDaysForcastContainer data={fiveDaysForcast} />
    </Paper>
  )
}

export default HomeContainer
