import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Unstable_Grid2'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  //   margin: '0.5rem',
  marginTop: '0.5rem',
  marginBottom: '0.5rem',
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

export default function FullWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid xs={12} md={3}>
          <Item sx={{ height: '1rem' }}>xs=12 md=8</Item>
          <Item sx={{ height: '20rem' }}>xs=12 md=8</Item>
          <Item sx={{ height: '7rem' }}>xs=12 md=8</Item>
        </Grid>

        <Grid xs={12} md={6}>
          <Item sx={{ height: '4rem' }}>xs=12 md=4</Item>
          <Item sx={{ height: '15rem' }}>xs=12 md=4</Item>
        </Grid>

        <Grid xs={12} md={3} sx={{ flexGrow: 1 }}>
          <Item sx={{ height: '2rem' }}>xs=12 md=8</Item>
          <Item sx={{ height: '11rem' }}>xs=12 md=4 coucou</Item>
          <Item sx={{ height: '11rem' }}>xs=12 md=4 coucou</Item>
        </Grid>

        {/* <Grid xs={12} md={3}>
          <Item>xs=12 md=3</Item>
        </Grid>
        <Grid xs={12} md={3}>
          <Item>xs=12 md=3</Item>
        </Grid> */}
      </Grid>
    </Box>
  )
}
