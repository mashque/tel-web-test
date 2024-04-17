import { createTheme } from '@mui/material/styles';

// Создаем тему с помощью createTheme
const theme = createTheme({
  palette: {
    primary: {
        light: '#636b94',
        main: '#060c3a',
        dark: '#111c50',
        contrastText: '#b9bdd1',
        background: '#121212',
      },
      secondary: {
        light: '#ca92a4',
        main: '#5d1e39',
        dark: '#3a0625',
        contrastText: '#ffdde5',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', 
    fontSize: 14, 
    fontWeightRegular: 400, // Нормальное начертание шрифта
    fontWeightBold: 700, // Жирное начертание шрифта
  },
});

export default theme;
