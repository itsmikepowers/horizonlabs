// src/components/Category.js
import React from 'react';
import { Box } from '@chakra-ui/react';
import BlogNavbar from './BlogNavbar';
import CategoryPosts from './CategoryPost';

const Category = () => {
  return (
    <Box bg="white" minHeight="100vh">
      <BlogNavbar />
      <CategoryPosts />
    </Box>
  );
};

export default Category;
