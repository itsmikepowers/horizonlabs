import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './Components/Navbar';
import theme from './theme'
import What from './Components/What';
import Contact from './Components/Contact';
import Expertise from './Components/Expertise';
import Portfolio from './Components/Portfolio';
import Hero from './Components/Hero';
import Testimonial from './Components/Testimonial';
import Horizon from './Components/Horizon';
import './App.css'

function App() {
  return (
    <ChakraProvider  theme={theme}>
      <Navbar />
      <Hero />
      <What />
      <Expertise />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Horizon />
    </ChakraProvider>
  );
}

export default App;