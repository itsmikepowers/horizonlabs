import {
    Box,
    Heading,
    Text,
    VStack,
    HStack,
    Input,
    Textarea,
    Button,
    Container,
  } from "@chakra-ui/react";
  
  function ContactSection() {
    return (
      <Box py="100px" bg="gray.200" width="100%">
        <Container maxW="1200px">
          <HStack
            spacing={10}
            justifyContent="space-between"
            flexDirection={["column", "column", "row", "row"]} // Responsive flexDirection
            width="100%"
          >
            {/* Left Side */}
            <VStack
              spacing={5}
              alignItems="start"
              flex="1" // Take up equal space
              mb={[5, 5, 0, 0]} // Add margin-bottom on mobile for spacing
            >
              <Heading as="h3" size="lg">
                Let's Get In Touch
              </Heading>
              <Text>
                To explore how AI and automation can revolutionize your business, set up a time to chat or send us a message!
              </Text>
              <Button colorScheme="blue" size="md">
                Let's Talk
              </Button>
            </VStack>
  
            {/* Right Side - Contact Form */}
            <VStack
              spacing={5}
              w="100%" // Use full width especially on mobile
              flex="1" // Take up equal space
              alignItems="start"
            >
              <Input bg="white" placeholder="Name" size="md" /> {/* Adjusted background color here */}
              <Input bg="white" placeholder="Email" type="email" size="md" /> {/* Adjusted background color here */}
              <Textarea bg="white" placeholder="Your message..." size="md" /> {/* Adjusted background color here */}
              <Button colorScheme="green" size="md">
                Submit
              </Button>
            </VStack>
          </HStack>
        </Container>
      </Box>
    );
  }
  
  export default ContactSection;
  