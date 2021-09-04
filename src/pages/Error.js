import { Typography } from '@material-ui/core'
import React from 'react'

const Error = () => {
  return (
    <div>
      <Typography variant="h2" align="center" style={{ marginTop: '2rem' }}>
        404
      </Typography>
      <Typography variant="h4" align="center">
        Page not found...
      </Typography>
    </div>
  )
}

export default Error
