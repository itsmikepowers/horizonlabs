import React, { useState } from 'react'; // Import useState
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
import buttonBackground from '../Assets/button.jpg';

function Contact() {
  // Define state to hold input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

// In your React component
const handleSendEmail = () => {
  // Send a POST request to the serverless function
  fetch('/api/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      email: email,
      message: message,
    }),
  })
  .then(response => response.text())
  .then(text => alert(text))
  .catch(error => alert('Error sending email.'));
};


  return (
    <Box py="100px" bg="transparent" width="100%">
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
            <Heading as="h1" color="white" size="2xl">
              Let's Get In Touch
            </Heading>
            <Text color="gray.200">
              To explore how we can develop websites, AI and automation for your business, set up a time to chat or send us a message! <br /><br /> Send me an email! mikepowersofficial@gmail.com
            </Text>
            <a href="https://calendly.com/horizonlabsai/discovery-call" target="_blank" rel="noopener noreferrer">
              <Button 
                  color="white" 
                  variant="solid" 
                  size="lg" 
                  borderRadius="20px"
                  style={{
                      backgroundImage: `url(${buttonBackground})`,
                      backgroundSize: '120%',
                      backgroundPosition: 'center',
                  }}
                  transition="transform 0.3s" 
                  _hover={{
                      transform: "scale(1.1)",
                  }}
              >
                  Let's Talk
              </Button>
          </a>

          </VStack>

          {/* Right Side - Contact Form */}
          <VStack
            spacing={5}
            w="100%" // Use full width especially on mobile
            flex="1" // Take up equal space
            alignItems="start"
          >
            <Input 
                color="black" 
                bg="white" 
                placeholder="Name" 
                size="md" 
                value={name} 
                onChange={(e) => setName(e.target.value)} // Bind value and onChange
            />
            <Input 
                color="black" 
                bg="white" 
                placeholder="Email" 
                type="email" 
                size="md" 
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Bind value and onChange
            />
            <Textarea 
                color="black" 
                bg="white" 
                placeholder="Your message..." 
                size="md" 
                resize="none" 
                value={message}
                onChange={(e) => setMessage(e.target.value)} // Bind value and onChange
            />
            <Button 
              width="100%"
              color="white" 
              variant="outline" 
              size="lg" 
              border="2px solid white" 
              transition="transform 0.3s, background-color 0.3s" 
              _hover={{
                transform: "scale(1.05)",
                backgroundColor: "#0dd110",
                border: "none"
              }}
              onClick={handleSendEmail} // Add onClick event to handle the email sending
            >
              Submit
            </Button>
          </VStack>
        </HStack>
      </Container>
    </Box>
  );
}

export default Contact;
