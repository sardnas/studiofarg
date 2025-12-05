import React, { Fragment } from 'react'
import {
  Typography,
  ButtonGroup,
  Button,
} from '@mui/material'

export const Content = ({ content, links, image, title }) => {
  return (
    <Fragment>
      <Typography color='#ac4c79' variant="h1">{title}</Typography>
      <img width="100%" src={image} alt="react logo" />
      <ButtonGroup variant='text' aria-label='Basic button group'>
        {Object.keys(links).map((key) => {
                    return <Button key={key}>{links[key]}</Button>
                  })}
      </ButtonGroup>
      <Typography>{content}</Typography>
    </Fragment>
  )
}
