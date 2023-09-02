import React from 'react';
import { Box, Heading, Text, Flex } from '@chakra-ui/react';

const How = () => {
  return (
    <Box 
      width="100%" 
      backgroundColor="red"
      pt='100px'
      pb='100px'
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Heading 
        as="h2" 
        size="xl" 
        marginBottom="10"
        textAlign="center"
      >
        How We Do It
      </Heading>
      <Flex 
        direction={['column', 'row']} 
        align="center"
        justify="center"
        spacing={8} 
        width="100%" 
        maxWidth="1200px"
        wrap="wrap"
      >
        <Box 
          width="350px" 
          height="350px" 
          padding="10" 
          borderRadius="50px" 
          backgroundColor="white" 
          m="5"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Heading as="h3" size="md" textAlign="center" marginBottom="10">AI Chatbot</Heading>
          <Text fontSize="md">
            Streamline customer service, enhance efficiency and personalize client interactions.
          </Text>
        </Box>
        <Box 
          width="350px" 
          height="350px" 
          padding="10" 
          borderRadius="50px" 
          backgroundColor="white" 
          m="5"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Heading as="h3" size="md" textAlign="center" marginBottom="10">GPT Personalization</Heading>
          <Text fontSize="md">
            Custom emails, outreach, and content for reaching new customers the right way.
          </Text>
        </Box>
        <Box 
          width="350px" 
          height="350px" 
          padding="10" 
          borderRadius="50px" 
          backgroundColor="white" 
          m="5"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Heading as="h3" size="md" textAlign="center" marginBottom="10">Automation Workflows</Heading>
          <Text fontSize="md">
            Speeding up emails, leads, workflows to give you your time back.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default How;
