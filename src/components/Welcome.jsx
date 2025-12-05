import React, { Fragment } from 'react'
import { ReactComponent as Logo } from './studiofarg.svg'
import { SocialMedia } from './SocialMedia'

import { Typography } from '@mui/material'

export const Welcome = () => {
  return (
    <Fragment>
      <Logo width='100%' />
      <SocialMedia />
      <Typography>
        Hello! My name is Sandra. Welcome to my little corner of the internet!
      </Typography>
    </Fragment>
  )
}
