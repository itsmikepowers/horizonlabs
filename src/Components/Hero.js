import { Box, Flex, Heading, Text, Button, Image } from '@chakra-ui/react';

function Hero() {
  return (
    <Box bg="#172191" w="full" py={12}>
      <Flex
        direction={['column', 'column', 'row']}  // Stack on mobile and tablet, horizontal on larger screens
        maxW="1200px"
        mx="auto"
        h={['auto', 'auto', '70vh']} // Adjust to auto height for smaller screens
        alignItems="center"
        justifyContent="space-between"
        px={8}
        spacing={8} // space between stacked items on smaller screens
      >
        {/* Left Side */}
        <Box 
          flex="1"  // Take up 50% of the space on larger screens
          textAlign={['center', 'center', 'left']}
        >
          <Heading mb={4} fontSize="6xl" fontWeight="bold" color="white">
            Design Re-Imagined
          </Heading>
          <Text mb={8} fontSize="3xl" color="gray.200">
            Supercharging Your Business With Automated and AI Powered Solutions.
          </Text>
          <Button 
            size="lg" 
            borderRadius="full" 
            colorScheme="teal" 
            mr={4}
          >
            Services
          </Button>
          <Button 
            size="lg" 
            borderRadius="full" 
            variant="outline" 
            colorScheme="teal"
          >
            Let's Talk
          </Button>
        </Box>

        {/* Right Side */}
        <Box 
          flex="1"  // Take up 50% of the space on larger screens
        >
          <Image
            src="https://via.placeholder.com/400"  // Placeholder image link
            alt="Placeholder Image"
            boxSize="100%"  // Use 100% of the available space in the container
            objectFit="cover"
            mx={['auto', 'auto', '0']}  // Center image on smaller screens
          />
        </Box>
      </Flex>
    </Box>
  );
}

export default Hero;
