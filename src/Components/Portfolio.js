import React from 'react';
import { Box, VStack, Heading, Image, useBreakpointValue, Button } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';

const Portfolio = () => {
  return (
    <Box
      backgroundColor="#351a54"
      width="100%"
      paddingY="50px"
      zIndex={5}
      display="flex" 
      flexDirection="column"   // Stack children vertically
  alignItems="center" 
    >
      {/* Header */}
      <Heading as="h1" color="white" size="2xl" textAlign="center" marginX="auto" maxWidth="1000px">
        Portfolio
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)"]}
        gap={10}
        maxWidth="1000px"
        width="100%"
        margin="0 auto"
        padding="5%"
        alignItems="stretch"
        zIndex={5}
        justifyContent="center"
      >
        <BoxItem
          imageSrc="https://via.placeholder.com/300"
        />
        <BoxItem
          imageSrc="https://via.placeholder.com/300"
        />
        <BoxItem
          imageSrc="https://via.placeholder.com/300"
        />
        <BoxItem
          imageSrc="https://via.placeholder.com/300"
        />
        <BoxItem
          imageSrc="https://via.placeholder.com/300"
        />
        <BoxItem
          imageSrc="https://via.placeholder.com/300"
        />
      </Box>
      <Button 
        colorScheme="blackAlpha" 
        rightIcon={<Box as="span" display="inline-block" ml="8px" fontSize="32px" >{'>'}</Box>}
        padding="2rem 3rem"
        rounded="full"
       >
        <Heading as="h2" size="md" fontWeight="bold">
          Full Portfolio
        </Heading>
      </Button>
    </Box>
  );
};

const BoxItem = ({ icon, imageSrc }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  // Define the box size based on the breakpoint
  const boxSize = useBreakpointValue({ base: '250px', md: '300px', lg: 'calc(1000px/3 - 20px)' });

  return (
    <VStack
      ref={ref}
      opacity={inView ? 1 : 0}
      transition="opacity 1s ease-out, transform 0.3s ease-out" 
      _hover={{ transform: "scale(1.07)", zIndex: 10 }}
      backgroundColor="#202987"
      borderRadius="20px"
      padding="50px"
      alignItems="center"
      spacing={4}
      width={boxSize}
      height={boxSize}
      zIndex={1}
    >
      <Image src={imageSrc} alt="Placeholder" borderRadius="10px" boxSize="100%" objectFit="cover" />
    </VStack>
  );
};

export default Portfolio;
