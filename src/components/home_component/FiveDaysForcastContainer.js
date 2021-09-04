import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import SingleDay from './SingleDay'
import Loader from '../Loader'

const styles = makeStyles({
  flexWrapDiv: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '2rem',
  },

  subTitle: {
    marginBottom: '2rem',
  },
})

const FiveDaysForcastContainer = ({ data }) => {
  if (!data) {
    return <Loader />
  }

  const { DailyForecasts } = data
  const classes = styles()
  return (
    <>
      <Typography className={classes.subTitle} variant="h6" align="center">
        Forcast for the next 5 days
      </Typography>
      <div className={classes.flexWrapDiv}>
        {DailyForecasts &&
          DailyForecasts.map((daily, i) => <SingleDay key={i} data={daily} />)}
      </div>
    </>
  )
}

export default FiveDaysForcastContainer
