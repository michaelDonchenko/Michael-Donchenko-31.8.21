import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

const Loader = () => {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        margin: '2rem 0',
      }}
    >
      <CircularProgress />
    </div>
  )
}

export default Loader
