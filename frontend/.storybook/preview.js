import { ThemeProvider } from 'styled-components';

import theme from 'styles/theme';
import GlobalStyles from 'styles/global';

export const parameters = {
  backgrounds: {
    default: 'wilt-light',
    values: [
      {
        name: 'wilt-light',
        value: theme.colors.mainBg
      },
      {
        name: 'wilt-white',
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
