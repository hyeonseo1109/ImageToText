import { style } from '@vanilla-extract/css'

export const previewCard = style({
  width: '100%',
  minHeight: '300px',
  border: '2px dashed #ccc',
  borderRadius: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f8f9fa',
  color: '#333',
  overflow: 'hidden'
})

export const previewImage = style({
  width: '100%',
  height: 'auto',
  maxHeight: '500px',
  objectFit: 'contain'
})

export const resultContainer = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%'
})

export const sectionTitle = style({
  fontSize: '1.2rem',
  marginBottom: '12px',
  color: '#333'
})

export const resultTextarea = style({
  width: '100%',
  height: '300px',
  padding: '16px',
  borderRadius: '12px',
  border: '1px solid #ddd',
  fontSize: '1rem',
  lineHeight: '1.6',
  resize: 'none',
  backgroundColor: '#fff',
  ':focus': {
    outline: '2px solid #42b883'
  }
})

export const loadingBox = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '300px',
  gap: '12px',
  color: '#666'
})
