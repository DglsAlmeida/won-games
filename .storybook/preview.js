import React from 'react';
import GlobalStyle from 'styles/global'
import theme from 'styles/theme'
import { ThemeProvider } from 'styled-components';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];
