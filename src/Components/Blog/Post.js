// src/components/Blog.js
import React from 'react';
import { Box } from '@chakra-ui/react';
import BlogNavbar from './BlogNavbar';
import PostPage from './PostPage';

const Blog = () => {
  return (
    <Box bg="white" minHeight="100vh">
      <BlogNavbar />
      <PostPage />
    </Box>
  );
};

export default Blog;
