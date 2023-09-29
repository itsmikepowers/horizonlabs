// src/components/Blog.js
import React from 'react';
import BlogPosts from './BlogPosts';
import { Box } from '@chakra-ui/react';
import BlogNavbar from './BlogNavbar';

const Blog = () => {
  return (
    <Box bg="white" minHeight="100vh">
      <BlogNavbar />
      <BlogPosts />
    </Box>
  );
};

export default Blog;
