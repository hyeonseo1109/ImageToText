import { style } from '@vanilla-extract/css'

export const container = style({
  width: '100%',
  height: '100%',
  overflowY: 'auto',
  overflowX: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
})
