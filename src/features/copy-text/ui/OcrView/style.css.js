import { style } from '@vanilla-extract/css';
export const container = style({
    width: '100%',
    height: '100%',
    margin: '40px auto',
    padding: '0 20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
});
export const title = style({
    textAlign: 'center',
    color: '#333',
    marginBottom: '30px'
});
export const uploadSection = style({
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px'
});
export const fileLabel = style({
    padding: '12px 24px',
    backgroundColor: '#4C6EF5',
    color: 'white',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background 0.2s',
    selectors: {
        '&:hover': { backgroundColor: '#364FC7' }
    }
});
export const hiddenInput = style({
    display: 'none'
});
export const loadingText = style({
    textAlign: 'center',
    color: '#868e96',
    marginTop: '20px'
});
export const resultSection = style({
    marginTop: '30px',
    border: '1px solid #dee2e6',
    borderRadius: '12px',
    overflow: 'hidden',
    backgroundColor: '#f8f9fa',
    height: '90%',
    width: '90%'
});
export const resultHeader = style({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 16px',
    borderBottom: '1px solid #dee2e6',
    backgroundColor: '#fff'
});
export const resultLabel = style({
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#495057'
});
export const resultContent = style({
    padding: '5rem',
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#212529',
    whiteSpace: 'pre-wrap',
    height: '100%',
    overflowY: 'auto'
});
export const copyButton = style({
    padding: '6px 12px',
    fontSize: '13px',
    backgroundColor: '#4C6EF5',
    border: '1px solid #ced4da',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    selectors: {
        '&:hover': { backgroundColor: '#e9ecef' }
    }
});
export const copySuccess = style({
    backgroundColor: '#4C6EF5',
    borderColor: '#40c057',
    color: '#2b8a3e'
});
