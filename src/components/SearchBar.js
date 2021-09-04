import React, { useState } from 'react'
import { makeStyles, TextField } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { useDispatch, useSelector } from 'react-redux'
import { autoComplete } from '../redux/actions/weatherActions'
import { changeCityId, resetAutoComplete } from '../redux/reducers/weatherSlice'
import {
  currentConditions,
  fiveDaysForcast,
} from '../redux/actions/weatherActions'

const styles = makeStyles({
  wrapper: {
    width: '100%',
    padding: '1rem',
    margin: '1rem 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textField: {
    width: '400px',
    maxWidth: '80%',
    padding: 0,
  },

  searchIcon: {
    marginTop: '16px',
    '&:hover': {
      cursor: 'pointer',
    },
  },

  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },

  resultsDiv: {
    width: '416px',
    maxWidth: '90%',
    padding: 0,
    margin: 0,
  },

  resultOptionLight: {
    cursor: 'pointer',
    margin: 0,
    padding: '0.5rem',
    '&:hover': {
      backgroundColor: 'lightGray',
    },
  },
  resultOptionDark: {
    cursor: 'pointer',
    margin: 0,
    padding: '0.5rem',
    '&:hover': {
      backgroundColor: 'black',
    },
  },
})

const SearchBar = () => {
  const classes = styles()
  const dispatch = useDispatch()
  const weatherState = useSelector((state) => state.weather)
  const { theme } = useSelector((state) => state.theme)
  const { autoComplete: data } = weatherState

  const [text, setText] = useState('')

  const handleSearch = () => {
    const regexTest = /^[a-zA-Z\s]*$/.test(text)

    if (regexTest === false) {
      return window.alert('Only English letters allowed')
    }

    dispatch(autoComplete(text))
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  const handleLocationChange = (result) => {
    dispatch(changeCityId(result.Key))
    setText('')
    dispatch(resetAutoComplete())
    dispatch(currentConditions(result.Key))
    dispatch(fiveDaysForcast(result.Key))
  }

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.flexCenter}>
          <TextField
            onKeyPress={(e) => handleKeyPress(e)}
            onChange={(e) => setText(e.target.value)}
            className={classes.textField}
            label="Search for places"
            value={text}
          />
          <SearchIcon
            onClick={() => handleSearch()}
            className={classes.searchIcon}
          />
        </div>

        {
          <div className={classes.resultsDiv}>
            {data &&
              data.length > 0 &&
              data.map((result, i) => (
                <p
                  onClick={() => handleLocationChange(result)}
                  className={
                    theme ? classes.resultOptionDark : classes.resultOptionLight
                  }
                  key={i}
                >
                  {result.LocalizedName}
                </p>
              ))}
          </div>
        }
      </div>
    </>
  )
}

export default SearchBar
