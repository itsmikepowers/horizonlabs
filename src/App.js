import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './Components/Navbar';
import theme from './theme';
import What from './Components/What';
import Contact from './Components/Contact';
import Expertise from './Components/Expertise';
import Portfolio from './Components/Portfolio';
import Hero from './Components/Hero';
import Testimonial from './Components/Testimonial';
import Horizon from './Components/Horizon';
import BackgroundComponent from './Components/BackgroundComponent';
import Blog from './Components/Blog/Blog'; 
import Post from './Components/Blog/Post';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Analytics } from '@vercel/analytics/react';
import Category from './Components/Blog/Category';
import ReferralLinks from './Components/ReferralLinks';


function RootLayout({ children }) {
  return (
    <>
      {children}
      <Analytics />
    </>
  );
}

function App() {
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <RootLayout>
          <Routes>
            {/* Main Route */}
            <Route path="/" element={
              <BackgroundComponent>
                <Navbar />
                <div className="app-scale">
                  <Hero />
                  <What />
                  <Expertise />
                  <Portfolio />
                  <Testimonial />
                  <Contact />
                  <Horizon />
                </div>
              </BackgroundComponent>
            } />

            {/* Blog Route */}
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:category" element={<Category />} /> {/* Add this line */}
            <Route path="/:slug" element={<Post />} />

            {/* Referral Links */}
            <Route path="shopify" element={<ReferralLinks to="https://www.shopify.com?ref=your_referral_code" />} />
          </Routes>
        </RootLayout>
      </ChakraProvider>
    </Router>
  );
}

export default App;
