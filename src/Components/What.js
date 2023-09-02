import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const What = () => (
  <Box 
    width="100%" 
    backgroundColor="blue" 
    display="flex" // Set this box as a flex container
    alignItems="center" // Vertically center the inner box
    justifyContent="center" // Horizontally center the inner box
    pt='100px'
    pb='100px'
  >
    <Box 
      padding={['40px', '60px', '80px']} 
      borderRadius="50px"
      maxWidth="800px"
      mx={['20px', '20px', '100px']} // Set horizontal margins. Adjust values as needed.
      backgroundColor="white"
    >
      <Heading 
        as="h2" 
        size="xl" 
        marginBottom="10"
        textAlign="center"
      >
        What We Do
      </Heading>
      <Text fontSize="md">
        Horizon Labs AI is an AI automation company dedicated to making a significant, positive impact on digital business. Rooted in the belief that technology should serve as an enabler of human potential, we focus on developing cutting-edge, empathetic AI solutions that streamline business processes, increase productivity, and foster sustainable growth.
      </Text>
    </Box>
  </Box>
);

export default What;
