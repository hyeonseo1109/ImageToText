import { style } from '@vanilla-extract/css'

export const previewCard = style({
  width: '100%',
  minHeight: '200px',
  border: '2px dashed #ddd',
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  backgroundColor: '#fafafa'
})

export const previewImage = style({
  maxWidth: '100%',
  height: 'auto',
  objectFit: 'contain'
})

export const resultTextarea = style({
  width: '100%',
  height: '300px',
  padding: '16px',
  borderRadius: '12px',
  border: '1px solid #e0e0e0',
  backgroundColor: '#fff',
  fontSize: '1.4rem',
  lineHeight: '1.6',
  color: '#333',
  resize: 'none',
  outline: 'none',
  ':focus': {
    borderColor: '#42b883'
  }
})
