import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    background: {
        default: '#121212', 
        paper: '#636b94',
    },
    primary: {
        light: '#636b94',
        main: '#060c3a',
        dark: '#111c50',
        contrastText: '#b9bdd1',
        mode: 'dark',
        
      },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', 
    fontSize: 14, 
    fontWeightRegular: 400,
    fontWeightBold: 700, 
  },
});

export default theme;
