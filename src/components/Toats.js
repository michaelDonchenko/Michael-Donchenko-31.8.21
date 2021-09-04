import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'
import { useSelector, useDispatch } from 'react-redux'
import { resetError } from '../redux/reducers/weatherSlice'

const Toats = () => {
  const weatherState = useSelector((state) => state.weather)
  const { error } = weatherState
  const dispatch = useDispatch()

  const handleClose = () => {
    setTimeout(() => {
      dispatch(resetError())
    }, 6000)
  }

  const instantClose = () => {
    dispatch(resetError())
  }

  return (
    error && (
      <Snackbar open={error} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={instantClose} severity="error">
          Error! failed with status code of {error.Code}, {error.Message}
        </Alert>
      </Snackbar>
    )
  )
}

export default Toats
