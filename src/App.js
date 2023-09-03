import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './Components/Navbar';
import theme from './theme'
import Hero from './Components/Hero';
import What from './Components/What';
import Contact from './Components/Contact';
import './App.css'
import Expertise from './Components/Expertise';
import WhatWeDo from './Components/WhatWeDo';
import Portfolio from './Components/Portfolio';

function App() {
  return (
    <ChakraProvider  theme={theme}>
      <Navbar />
      <Hero />
      <What />
      <WhatWeDo />
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