import { ThemeProvider } from 'styled-components';

import theme from 'styles/theme';
import GlobalStyles from 'styles/global';

export const parameters = {
  backgrounds: {
    default: 'pantokrator-light',
    values: [
      {
        name: 'pantokrator-light',
        value: theme.colors.mainBg
      },
      {
        name: 'pantokrator-white',
        value: theme.colors.white
      }
    ]
  }
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
];
