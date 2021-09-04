import React from 'react'
import Brightness7Icon from '@material-ui/icons/Brightness7'
import Brightness3Icon from '@material-ui/icons/Brightness3'
import { IconButton } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { setTheme } from '../redux/reducers/themeSlice'

const ThemeToggle = () => {
  const { theme } = useSelector((state) => state.theme)
  const dispatch = useDispatch()
  const icon = !theme ? <Brightness7Icon /> : <Brightness3Icon />
  return (
    <IconButton
      edge="end"
      color="inherit"
      aria-label="mode"
      style={{ margin: '0.2rem 1rem' }}
      onClick={() => dispatch(setTheme(!theme))}
    >
      <span style={{ marginRight: '0.8rem' }}>Theme:</span> {icon}
    </IconButton>
  )
}

export default ThemeToggle
