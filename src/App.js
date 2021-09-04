import { Container, CssBaseline } from '@material-ui/core'
import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import NavBar from './components/NavBar'
import Error from './pages/Error'
import Toats from './components/Toats'
import setFavorites from './utils/setFavorites'
import { ThemeProvider } from '@material-ui/core'
import { createTheme } from '@material-ui/core'
import { dark, light } from './styles/theme'
import { useSelector, useDispatch } from 'react-redux'
import { setWidth } from './redux/reducers/widthSlice'

const App = () => {
  const { theme } = useSelector((state) => state.theme)
  const appliedTheme = createTheme(theme ? dark : light)
  const dispatch = useDispatch()

  const handleResize = () => {
    dispatch(setWidth(window.innerWidth))
  }

  useEffect(() => {
    setFavorites()
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  }, [])

  return (
    <Router>
      <ThemeProvider theme={appliedTheme}>
        <CssBaseline />
        <NavBar />
        <Toats />

        <Container maxWidth="md" style={{ flexGrow: 1 }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/favorites" component={Favorites} />
            <Route path="*" component={Error} />
          </Switch>
        </Container>
      </ThemeProvider>
    </Router>
  )
}

export default App
