import React from 'react';
import { Box } from '@chakra-ui/react';

const Expertise = () => {
  return (
    <Box display="grid" gridTemplateColumns="1fr 1fr" gap={4}>
      <Box width="100px" height="100px" backgroundColor="blue.500" />
      <Box width="100px" height="100px" backgroundColor="green.500" />
      <Box width="100px" height="100px" backgroundColor="red.500" />
      <Box width="100px" height="100px" backgroundColor="yellow.500" />
    </Box>
  );
};

export default Expertise;
