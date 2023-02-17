import '@/styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme= extendTheme({
  colors:{
    brand:{
      paleBlue : "hsl(225, 100%, 94%)",
      brightBlue : "hsl(245, 75%, 52%)",
      veryPale : "hsl(225, 100%, 98%)",
      desaturated : "hsl(224, 23%, 55%)",
      dark : "hsl(223, 47%, 23%)"
    }
  },
  breakpoints : {
    sm : '376px',
    md : '426px',
    lg : '769px',
    xl : '1440px'
  }
})

export default function App({ Component, pageProps }) {
  return <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider> 
}
