import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
        fontFamily: "Arial, Helvetica, sans-serif"
    }
});

ReactDOM.render(<MuiThemeProvider theme={theme}><App/></MuiThemeProvider>, document.getElementById('app'));