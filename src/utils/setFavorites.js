const setFavorites = () => {
  if (!localStorage.getItem('favorites')) {
    return localStorage.setItem('favorites', JSON.stringify([]))
  }
  return
}

export default setFavorites
