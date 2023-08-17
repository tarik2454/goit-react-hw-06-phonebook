import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { Reset } from './styles/Reset';
import { GlobalStyle } from './styles/GlobalStyle';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Reset />
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </>
);
