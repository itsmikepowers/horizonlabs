// src/components/Blog.js
import React from 'react';
import BlogPosts from './BlogPosts';
import { Box } from '@chakra-ui/react';
import BlogNavbar from './BlogNavbar';
import Footer from './Footer';

const Blog = () => {
  return (
    <Box bg="white" minHeight="100vh">
      <BlogNavbar />
      <BlogPosts />
      <Footer />
    </Box>
  );
};

export default Blog;
