import { globalStyle } from '@vanilla-extract/css';
import './layers.css';
import './reset.css';
globalStyle('html', {
    margin: 0,
    padding: 0,
    width: '100%',
    height: '100%',
    color: 'black',
    boxSizing: 'border-box',
    overflow: 'hidden'
});
globalStyle('body', {
    fontFamily: 'inherit',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '100%',
    height: '100%'
});
globalStyle('#app', {
    width: '100%',
    height: '100%',
    fontFamily: 'inherit'
});
globalStyle('canvas', {
    zIndex: 999999,
    pointerEvents: 'none',
    position: 'fixed'
});
// 1. 스크롤바 전체 너비/높이
globalStyle('::-webkit-scrollbar', {
    width: '10px',
    height: '10px'
});
// 2. 스크롤바 트랙 (바탕)
globalStyle('::-webkit-scrollbar-track', {
    backgroundColor: '#f1f3f5',
    borderRadius: '10px'
});
// 3. 스크롤바 핸들 (움직이는 부분)
globalStyle('::-webkit-scrollbar-thumb', {
    backgroundColor: '#b5b5b5',
    borderRadius: '10px',
    border: '2px solid #f1f3f5'
});
// 4. 핸들 위에 마우스 올렸을 때
globalStyle('::-webkit-scrollbar-thumb:hover', {
    backgroundColor: '#364FC7'
});
