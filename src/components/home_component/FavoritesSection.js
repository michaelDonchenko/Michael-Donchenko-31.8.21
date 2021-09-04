import React from 'react'
import { makeStyles } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import { Button } from '@material-ui/core'
import { setFavorites } from '../../redux/reducers/weatherSlice'

const styles = makeStyles({
  flexEnd: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
  },
})

const FavoritesSection = () => {
  const classes = styles()
  const dispatch = useDispatch()
  const weatherState = useSelector((state) => state.weather)
  const { theme } = useSelector((state) => state.theme)
  const { width } = useSelector((state) => state.width)
  const { cityId, favorites } = weatherState

  const addToFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites'))
    favorites.push(cityId)

    dispatch(setFavorites(favorites))
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }

  const removeFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites'))
    let index = favorites.indexOf(cityId)
    favorites.splice(index, 1)

    dispatch(setFavorites(favorites))
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }

  return (
    <div className={width < 600 ? classes.flexCenter : classes.flexEnd}>
      {favorites.includes(cityId) ? (
        <Button
          onClick={() => removeFavorite()}
          startIcon={<FavoriteBorderIcon />}
          color="primary"
          variant="contained"
        >
          Remove from favorites
        </Button>
      ) : (
        <Button
          onClick={() => addToFavorite()}
          startIcon={<FavoriteBorderIcon />}
          color={theme ? 'secondary' : 'primary'}
          variant="outlined"
        >
          Add to favorites
        </Button>
      )}
    </div>
  )
}

export default FavoritesSection
