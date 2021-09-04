import React from 'react'
import { makeStyles } from '@material-ui/core'
import { useSelector } from 'react-redux'
import FavoriteCard from './FavoriteCard'

const styles = makeStyles({
  wrapper: {
    padding: '1rem',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
})

const FavoritesContainer = () => {
  const classes = styles()
  const { favorites } = useSelector((state) => state.weather)
  return favorites && !favorites.length ? (
    <p>You do not have any favorites yet...</p>
  ) : (
    <div className={classes.wrapper}>
      {favorites.map((favorite, i) => (
        <FavoriteCard key={i} id={favorite} />
      ))}
    </div>
  )
}

export default FavoritesContainer
