import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './Components/Navbar';
import theme from './theme'
import What from './Components/What';
import Contact from './Components/Contact';
import './App.css'
import Expertise from './Components/Expertise';
import Portfolio from './Components/Portfolio';
import HeroTwo from './Components/HeroTwo';

function App() {
  return (
    <ChakraProvider  theme={theme}>
      <Navbar />
      <HeroTwo />
      <What />
      <Expertise />
      <Portfolio />
      <Contact />
    </ChakraProvider>
  );
}

export default App;


//hero
//swipe with design examples
//whatwedo
//expertise
//portfolio
//testimonials
//contact

//websites, automation, ai that 
//supercharges your business