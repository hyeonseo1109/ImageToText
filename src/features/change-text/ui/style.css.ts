import { style } from '@vanilla-extract/css'

export const container = style({
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  backgroundColor: '#f9f9f9',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px'
})

export const inputField = style({
  fontSize: '14px',
  cursor: 'pointer'
})

export const labelText = style({
  fontWeight: 'bold',
  fontSize: '14px',
  color: '#333'
})
