import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { NavLink } from 'react-router-dom'

const styles = makeStyles({
  logo: {
    flexGrow: 1,
  },
  navLink: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '18px',
    padding: '0.4rem',
    transition: 'all 0.3s linear',
    '&:hover': {
      color: '#ffc107',
    },
  },
})

const activeStyle = {
  color: '#ffc107',
}

const NavBar = () => {
  const classes = styles()
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.logo}>
          Herolo Weather
        </Typography>
        <NavLink
          exact
          activeStyle={activeStyle}
          className={classes.navLink}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          exact
          activeStyle={activeStyle}
          className={classes.navLink}
          to="/favorites"
        >
          Favorites
        </NavLink>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
