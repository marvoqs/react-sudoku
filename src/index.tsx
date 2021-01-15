import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { Content } from './components';
import { unregister, reportWebVitals } from './core';
import { GlobalStyles, theme } from './styles';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Content>
      <div>Hello World</div>
    </Content>
  </ThemeProvider>,
  document.getElementById('root')
);

unregister();

reportWebVitals();
