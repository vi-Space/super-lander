import React from 'react';
import ReactDOM from 'react-dom';
import App from './core/App.js';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import registerServiceWorker from './registerServiceWorker';
 
import {white, green} from '@material-ui/core/colors';

import './styles/css/main.css';

const theme = createMuiTheme({
    typography: {
      // Use the system font.
      fontFamily:
        'product_sans'
    },
    palette: {
        primary: white,
        secondary: green
    }
})

ReactDOM.render(<MuiThemeProvider theme={theme}><App /></MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
