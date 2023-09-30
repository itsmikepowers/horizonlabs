// src/components/Blog.js
import React from 'react';
import { Box } from '@chakra-ui/react';
import BlogNavbar from './BlogNavbar';
import PostPage from './PostPage';
import Footer from './Footer';

const Post = () => {
  return (
    <Box bg="white" minHeight="100vh">
      <BlogNavbar />
      <PostPage />
      <Footer/>
    </Box>
  );
};

export default Post;
