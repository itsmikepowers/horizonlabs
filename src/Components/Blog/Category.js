// src/components/Category.js
import React from 'react';
import { Box } from '@chakra-ui/react';
import BlogNavbar from './BlogNavbar';
import CategoryPosts from './CategoryPost';
import Footer from './Footer';

const Category = () => {
  return (
    <Box bg="white" minHeight="100vh">
      <BlogNavbar />
      <CategoryPosts />
      <Footer />
    </Box>
  );
};

export default Category;
