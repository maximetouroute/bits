import React, { useEffect } from 'react'
import { useState } from 'react'
import {
  buttonCSS,
  form__groupCSS,
  form__fieldCSS,
  form__labelCSS,
  formCSS,
} from './styles'
import { useTheme } from '@emotion/react'
import SendIcon from '@mui/icons-material/Send'
import { InputAdornment } from '@mui/material'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import Cookies from 'universal-cookie'
import { glassStyle } from '../../../globalStyles'

interface OwnProps {
  uniqueId: string
  newsletterPostURL: string
  uniqueAntiSpamId: string
}

export default function emailListForm({
  uniqueId,
  newsletterPostURL,
  uniqueAntiSpamId,
}: OwnProps) {
  const theme = useTheme()
  return (
    <Box
      component="form"
      action={newsletterPostURL}
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
    >
      <TextField
        sx={{ width: '20rem', maxWidth: '70vw' }}
        id={uniqueId}
        label="Enter your email"
        variant="outlined"
        required
        type="email"
        autoComplete="email"
        name="EMAIL"
        InputProps={{
          sx: { ...glassStyle(theme), border: 'none' },
          endAdornment: (
            <IconButton
              type="submit"
              sx={{
                // width: '4rem',
                // marginLeft: '0.5rem',
                // backgroundColor: theme.palette.,
                // borderRadius: '4px',
                // color: 'white',
                svg: { transition: 'all 100ms linear' },
                '&:hover': {
                  color: theme.palette.primary.main,
                  svg: { transform: 'scale(1.15)' },
                },
              }}
              name="subscribe"
              value="Subscribe"
              id="mc-embedded-subscribe"
            >
              <SendIcon />
            </IconButton>
          ),
        }}
        onChange={(e) => {
          new Cookies().set('subEmail', e.target.value, { sameSite: 'strict' })
          // console.log(new Cookies().get('subEmail')); // Prod test
        }}
      />
      <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
        <TextField type="text" name={uniqueAntiSpamId} value="true" />
      </div>
    </Box>
  )
}
