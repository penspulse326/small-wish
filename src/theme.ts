'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#65c3c8', // cupcake primary
          contrastText: '#1d1d1d',
        },
        secondary: {
          main: '#ef9fbc', // cupcake secondary
        },
        background: {
          default: '#faf7f5', // cupcake base-100
          paper: '#ffffff', // cupcake base-200
        },
        text: {
          primary: '#291334', // cupcake base content
          secondary: '#291334',
        },
      },
    },

    dark: {
      palette: {
        primary: {
          main: '#38bdf8', // business primary
          contrastText: '#ffffff',
        },
        secondary: {
          main: '#818cf8', // business secondary
        },
        background: {
          default: '#1d232a', // business base-100
          paper: '#191e24', // business base-200
        },
        text: {
          primary: '#a6adba', // business base content
          secondary: '#a6adba',
        },
      },
    },
  },

  cssVariables: {
    colorSchemeSelector: 'class',
  },

  typography: {
    fontFamily: `var(--font-noto)`,
  },
});

export default theme;
