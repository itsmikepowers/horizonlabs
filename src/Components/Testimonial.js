import { Box, Flex, Heading, Button, Text, useBreakpointValue, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useInView } from 'react-intersection-observer';

const TESTIMONIAL_DATA = [
  {
    text: "\"Working with the team has been a transformative experience. The dedication and expertise here are unparalleled, and it has allowed us to tackle challenges head-on.\"",
    name: "Kathy Powers",
    position: "Software Engineer",
    color: "#ff9050"
  },
  {
    text: "\"The collaboration and vision of this company are what sets it apart. Every project is an opportunity, and with the team's support, success is always within reach.\"",
    name: "John Doe",
    position: "Product Manager",
    color: "#25b6f2"
  },
  {
    text: "\"In the realm of design, it's rare to find a place that values innovation and user experience equally. Here, I've found a balance that drives excellence in every project.\"",
    name: "Test Person", 
    position: "UI/UX Designer",
    color: "#fb4f59"
  }
];

function Testimonial() {
  const [currentTestimonial, setCurrentTestimonial] = useState(TESTIMONIAL_DATA[0]);

  // For the main testimonial box
  const [testimonialRef, testimonialInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  // For the individual person boxes
  const [personRef, personInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerWidth = "90%";

  const textBoxPadding = useBreakpointValue({
    base: "8",
    md: "4"
  });

  const buttonHeight = useBreakpointValue({
    base: "200px",
    md: "100px"
  });

  const buttonPadding = useBreakpointValue({
    base: "4",
    md: "2"
  });

  const buttonTextAlign = useBreakpointValue({
    base: "center",
    md: "left"
  });

  const containerHeight = useBreakpointValue({
    base: "auto",
    md: "80vh"
  });

  return (
    <Flex direction="column" align="center" justify="center" h={containerHeight} bg="transparent" id="testimonal">

      <Heading as="h1" color="white" size="2xl" textAlign="center" mb="50px">
        Testimonials
      </Heading>

      <Box
        ref={testimonialRef}
        opacity={testimonialInView ? 1 : 0}
        transition="opacity 1s ease-out"
        background="linear-gradient(to bottom right, #202987, #151a54)"
        w={containerWidth}
        maxW="800px"
        p={textBoxPadding}
        borderRadius="20px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        padding="30px"
      >

        <Text  fontStyle="italic" fontWeight="100" color="gray.200" fontSize="2xl" textAlign="center" mb="4">
          {currentTestimonial.text}
        </Text>

        <Text color="white" fontWeight="bold" fontSize="lg">
          {currentTestimonial.name}
        </Text>

        <Text color="white" fontSize="lg">
          {currentTestimonial.position}
        </Text>

      </Box>

      <Box height="4" />

      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={{ base: 0, md: 4 }}
        width={containerWidth}
        maxW="800px"
        justifyContent="center"
      >

        {TESTIMONIAL_DATA.map(testimonial => (
          <Button
            ref={personRef}
            opacity={personInView ? 1 : 0}
            transition="opacity 1s ease-out, transform 0.3s ease-out, box-shadow 0.2s ease-out"
            _hover={{ transform: "scale(1.07)", zIndex: 10, boxShadow: "10px 10px 15px rgba(0, 0, 0, 0.2)" }}
            key={testimonial.name} 
            height={buttonHeight}
            padding={buttonPadding}
            flex="1"
            background="linear-gradient(to bottom right, #202987, #151a54)"
            color="white"
            fontSize="xl"
            textAlign={buttonTextAlign}
            justifyContent="center"
            borderRadius="20px"
            onClick={() => setCurrentTestimonial(testimonial)}
            mt="20px"
          >

            <Flex flexDir="column">  
              <Text fontWeight="bold" fontSize="lg" color={testimonial.color}>{testimonial.name}</Text> 
              <Text color="white" fontWeight= "medium" fontSize="lg">{testimonial.position}</Text> 
            </Flex>

          </Button>
        ))}

      </Stack>

    </Flex>
  );
}

export default Testimonial;
