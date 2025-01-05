import {
    ThemeProvider as MaterialThemeProvider,
    createTheme,
  } from '@mui/material/styles'

  export const makeMaxTheme = (accentColor?: string) => {

  return createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: accentColor ? accentColor : '#09143C',
      },
      secondary: {
        main: accentColor ? accentColor : '#E4E4E4',
        // contrastText: accentColor ? '#F7F7F7' : '#0C132C',
      },
      background: {
        default: '#E4E4E4',
        paper: '#fafafa',
      },

      info: {
        main: '#182A6E',
      },

      action: {
        active: accentColor ? accentColor : '#0C132C',
      },

      // action: {
      //   hover: 'rgba(0,0,0,0.56)',
      // },
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold: 3,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset: 0.2,
    },
    typography: {
      fontFamily: ["Be Vietnam Pro", "Roboto", "sans-serif"].join(","),
    },
    components: {
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 8, // Set your desired border radius for buttons
          },
        },
      },
    },
  });
};
