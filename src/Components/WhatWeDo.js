import { Box, Image, Center, Text, Heading } from "@chakra-ui/react";
import { useInView } from 'react-intersection-observer';

function WhatWeDo() {
  const [refOne, inViewBlue] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [refTwo, inViewGreen] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [refThree, inViewRed] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <Center height="100vh" backgroundColor="#251a54">
      <Box display="flex" flexDirection="column" alignItems="center" maxWidth="1000px" width="100%">
        
        {/* Header */}
        <Box marginBottom="50px">
          <Heading as="h1" color="white" size="2xl">What We Do</Heading>
        </Box>

        {/* Main Content */}
        <Box display="flex" width="100%">
          {/* Left Section */}
          <Box width="40%" padding="20px" display="flex" flexDirection="column">
            
            {/* Blue Box */}
            <Box 
                ref={refOne} 
                opacity={inViewBlue ? 1 : 0} 
                transition="opacity 1s ease-out, transform 0.3s ease-out" 
                _hover={{ transform: 'scale(1.07)' }}
                flex="1" 
                backgroundColor="#202987" 
                marginBottom="20px" 
                borderRadius="20px" 
                padding="30px" 
                display="flex" 
                flexDirection="column" 
                justifyContent="center" 
                alignItems="flex-start">
                <Heading size="md" fontWeight="bold" color="white">Async process</Heading>
                <Text color="gray.200">No meetings. We’ve been working for 5 years with clients without a single meeting. It works.</Text>
            </Box>

            {/* Green Box */}
            <Box 
                ref={refTwo} 
                opacity={inViewGreen ? 1 : 0} 
                transition="opacity 1s ease-out, transform 0.3s ease-out" 
                _hover={{ transform: 'scale(1.07)' }}
                flex="1" 
                backgroundColor="#202987" 
                marginBottom="20px" 
                borderRadius="20px" 
                padding="30px" 
                display="flex" 
                flexDirection="column" 
                justifyContent="center" 
                alignItems="flex-start">
                <Heading size="md" fontWeight="bold" color="white">Manage with Trello</Heading>
                <Text color="gray.200">Trello allows you to view all active, queued, and completed tasks with convenience.</Text>
            </Box>

            {/* Red Box */}
            <Box 
                ref={refThree} 
                opacity={inViewRed ? 1 : 0} 
                transition="opacity 1s ease-out, transform 0.3s ease-out" 
                _hover={{ transform: 'scale(1.07)' }}
                flex="1" 
                backgroundColor="#202987" 
                borderRadius="20px" 
                padding="30px" 
                display="flex" 
                flexDirection="column" 
                justifyContent="center" 
                alignItems="flex-start">
                <Heading size="md" fontWeight="bold" color="white">Unlimited team members</Heading>
                <Text color="gray.200">Invite and enable them to submit design requests and track their progress.</Text>
            </Box>
          </Box>
          
          {/* Right Section */}
          <Box width="60%" padding="20px">
            <Image src="https://via.placeholder.com/150" alt="Stock Photo" width="100%" borderRadius="5px"/>
          </Box>
        </Box>
      </Box>
    </Center>
  );
}

export default WhatWeDo;
