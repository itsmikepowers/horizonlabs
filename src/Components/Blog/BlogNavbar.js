// src/components/BlogNavbar.js
import React from 'react';
import { Box, Text, Image, Flex } from '@chakra-ui/react';
import logo from '../../Assets/logo.png';
import { Link } from 'react-router-dom';

const BlogNavbar = () => {
  return (
    <Box bg="#151a54" p={4} height="100px">
      <Flex 
        maxWidth="1200px" 
        mx="auto" 
        width="100%" 
        alignItems="center"
        justifyContent="space-between" // Ensuring maximum space between elements
      >
        {/* Grouped logo and Horizon Labs text here */}
        <Flex alignItems="center">
          <Link to="/">
            <Image src={logo} alt="Horizon Labs Logo" boxSize="60px" mr={4} />
          </Link>
          <Link to="/">
            <Text fontWeight="bold" fontSize="2xl" color="white">
              Horizon Labs
            </Text>
          </Link>
        </Flex>
        
        {/* Placed Blog text here, to the far right */}
        <Link to="/blog">
          <Text fontWeight="bold" fontSize="xl" color="white">
            Blog
          </Text>
        </Link>
      </Flex>
    </Box>
  );
};

export default BlogNavbar;
