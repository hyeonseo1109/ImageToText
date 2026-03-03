import { globalStyle } from '@vanilla-extract/css'
import './layers.css'
import './reset.css'

globalStyle('html', {
  margin: 0,
  padding: 0,
  width: '100%',
  height: '100%',
  color: 'black',
  boxSizing: 'border-box',
  overflow: 'hidden'
})

globalStyle('body', {
  fontFamily: 'inherit',
  margin: 0,
  padding: 0,
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: 'white',
  width: '100%',
  height: '100%'
})

globalStyle('#app', {
  width: '100%',
  height: '100%',
  fontFamily: 'inherit'
})

globalStyle('canvas', {
  zIndex: 999999,
  pointerEvents: 'none',
  position: 'fixed'
})
