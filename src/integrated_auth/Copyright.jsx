import { Typography } from '@mui/material'
import React from 'react'

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {"Copyright ©"}
      &nbsp; 
      <i className="fa-brands fa-github" style={{fontSize:'2rem'}}></i>
      &nbsp; Bitcamp BIT221기 &nbsp; 
      {new Date().getFullYear()}
    </Typography>
  )
}

export default Copyright