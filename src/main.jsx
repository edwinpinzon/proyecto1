import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './index.css'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import {BrowserRouter} from 'react-router-dom';


const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#5E90F2',
    },
    secondary: {
      main: '#0554F2',
    },
    background: {
      default: '#f5f0ef',
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
        <CssBaseline />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
