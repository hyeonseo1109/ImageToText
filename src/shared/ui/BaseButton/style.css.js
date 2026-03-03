import { style } from '@vanilla-extract/css';
export const button = style({
    padding: '12px 24px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#42b883',
    color: 'white',
    fontWeight: '600',
    fontSize: '1.6rem',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    ':hover': {
        backgroundColor: '#33a06f',
        transform: 'translateY(-1px)'
    },
    ':active': {
        transform: 'translateY(0)'
    }
});
