import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    background: {
        default: '#8d93ae', 
        paper: '#bdc0cd',
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
    color: 'black',
    fontFamily: 'Roboto, sans-serif', 
    fontSize: 14, 
    fontWeightRegular: 400,
    fontWeightBold: 700, 
  },
});

export default theme;
