import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme(
  {
    palette: {
      common: { black: '#000', white: '#fff' },
      background: { paper: '#fff', default: '#fafafa' },
      primary: {
        light: 'rgba(255, 138, 101, 1)',
        main: 'rgba(255, 87, 34, 1)',
        dark: 'rgba(178, 60, 23, 1)',
        contrastText: '#fff',
      },
      secondary: {
        light: 'rgba(203, 94, 60, 1)',
        main: 'rgba(191, 54, 12, 1)',
        dark: 'rgba(133, 37, 8, 1)',
        contrastText: '#fff',
      },
      error: {
        light: 'rgba(246, 104, 94, 1)',
        main: 'rgba(244, 67, 54, 1)',
        dark: 'rgba(170, 46, 37, 1)',
        contrastText: '#fff',
      },
      text: {
        primary: 'rgba(0, 0, 0, 0.87)',
        secondary: 'rgba(0, 0, 0, 0.54)',
        disabled: 'rgba(0, 0, 0, 0.38)',
        hint: 'rgba(0, 0, 0, 0.38)',
      },
    },
    typography: {
      useNextVariants: true,
    },
  },
);
