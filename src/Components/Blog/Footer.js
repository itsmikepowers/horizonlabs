// src/components/Footer.js
import React from 'react';
import { Box, Link, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box 
      as="footer" 
      role="contentinfo" 
      py="2" 
      px="4" 
      backgroundColor="gray.200" 
      color="black" 
      textAlign="center"
    >
      <ul style={{ 
        listStyleType: 'none', 
        padding: 0, 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '10px', 
        alignItems: 'center', 
        marginBottom: '10px'
      }}>
        <li><Link href="/about" fontSize="sm">About Us</Link></li>
        <li><Link href="/contact" fontSize="sm">Contact</Link></li>
        <li><Link href="/privacy-policy" fontSize="sm">Privacy Policy</Link></li>
        <li><Text fontSize="sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</Text></li>
        <li><Text fontSize="sm">Developed by Hoirzon Labs</Text></li>
      </ul>
    </Box>
  );
};

export default Footer;
