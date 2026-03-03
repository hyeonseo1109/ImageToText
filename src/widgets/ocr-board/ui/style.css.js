import { style } from '@vanilla-extract/css';
export const uploadContainer = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
    padding: '40px',
    backgroundColor: '#f0f9f4',
    borderRadius: '16px',
    marginBottom: '24px'
});
export const helperText = style({
    fontSize: '1.2rem',
    color: '#666'
});
