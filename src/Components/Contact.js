import React, { useState } from 'react';
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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name, email, message,
    };

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if(response.ok) {
        alert('Email sent successfully!');
        setName(''); setEmail(''); setMessage(''); // Clear the form
      } else {
        alert('Error sending email. Please try again.');
      }
    } catch (error) {
      alert('Failed to send email. Please try again later.');
    }
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
              To explore how AI and automation can revolutionize your business, set up a time to chat or send us a message!
            </Text>
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
          </VStack>

          {/* Right Side - Contact Form */}
          <VStack
            spacing={5}
            w="100%" // Use full width especially on mobile
            flex="1" // Take up equal space
            alignItems="start"
          >
            <Input bg="white" color="black" placeholder="Name" size="md" />
            <Input bg="white" color="black" placeholder="Email" type="email" size="md" />
            <Textarea bg="white" color="black" placeholder="Your message..." size="md" resize="none" />
            <Button 
              onClick={handleSubmit}
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
              }}>
              Submit
            </Button>
          </VStack>
        </HStack>
      </Container>
    </Box>
  );
}

export default Contact;
