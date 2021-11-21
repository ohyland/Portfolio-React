import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#141414',
        },
        secondary: {
            main: '#DA57F3',
        },
        background: {
            default: '#212121',
            paper: '#424242',
        },
    },
    typography: {
        fontFamily: "'Montserrat', sans-serif",
    },
});

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </CssBaseline>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
