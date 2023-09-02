import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './Components/Navbar';
import theme from './theme'
import Hero from './Components/Hero';
import What from './Components/What';
import How from './Components/How';
import Contact from './Components/Contact';
import './App.css'

function App() {
  return (
    <ChakraProvider  theme={theme}>
      <Navbar />
      <Hero />
      <What />
      <How />
      <Contact />
    </ChakraProvider>
  );
}

export default App;
