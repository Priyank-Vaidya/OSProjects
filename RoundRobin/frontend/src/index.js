import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const themeLight = createMuiTheme({
//   palette: {
//     background: {
//       default: "#e4f0e2"
//     }
//   },
// });

// const themeDark = createMuiTheme({
//   palette: {
//     background: {
//       default: "#222222",
//     }
//   },
// });
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
