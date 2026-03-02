import { style } from '@vanilla-extract/css'

export const container = style({
  maxWidth: '900px',
  margin: '0 auto',
  padding: '40px 20px',
  textAlign: 'center',
  fontFamily: 'sans-serif'
})

export const uploadSection = style({
  marginBottom: '30px'
})

export const customButton = style({
  background: '#42b883',
  color: 'white',
  padding: '12px 24px',
  borderRadius: '8px',
  cursor: 'pointer',
  fontWeight: 'bold',
  transition: 'background 0.2s',
  ':hover': {
    background: '#33a06f'
  }
})

export const contentLayout = style({
  display: 'flex',
  gap: '20px',
  justifyContent: 'center',
  flexWrap: 'wrap',
  marginTop: '20px'
})

export const previewBox = style({
  flex: 1,
  minWidth: '300px',
  border: '1px solid #ddd',
  padding: '20px',
  borderRadius: '12px',
  background: '#f9f9f9',
  minHeight: '400px'
})

export const resultBox = style([previewBox])

export const imageWrapper = style({
  width: '100%',
  marginTop: '15px'
})

export const textarea = style({
  width: '100%',
  height: '300px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '12px',
  resize: 'none',
  fontSize: '14px',
  lineHeight: '1.6',
  backgroundColor: 'white'
})

export const progressBarContainer = style({
  width: '100%',
  backgroundColor: '#eee',
  borderRadius: '10px',
  marginTop: '10px',
  overflow: 'hidden'
})

export const progressBar = style({
  height: '10px',
  background: '#42b883',
  transition: 'width 0.3s ease-out'
})
