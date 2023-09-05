import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    body: 'Montserrat, sans-serif',
    heading: 'Montserrat, sans-serif',
  },
  styles: {
    global: {
      // targeting the body element
      body: {
        bg: "#151a54",
        color: "white", // You might also want to change the default text color to be visible against the dark background
      },
    },
  },
});

export default theme;
