import { Box, Flex, Heading, Button, Text, useBreakpointValue, Stack } from "@chakra-ui/react";
import React, { useState } from "react";

const TESTIMONIAL_DATA = [
  {
    text: "Working with the team has been a transformative experience. The dedication and expertise here are unparalleled, and it has allowed us to tackle challenges head-on.",
    name: "Kathy Powers",
    position: "Software Engineer"
  },
  {
    text: "The collaboration and vision of this company are what sets it apart. Every project is an opportunity, and with the team's support, success is always within reach.",
    name: "John Doe",
    position: "Product Manager"
  },
  {
    text: "In the realm of design, it's rare to find a place that values innovation and user experience equally. Here, I've found a balance that drives excellence in every project.",
    name: "Test Person", 
    position: "UI/UX Designer"
  }
];

function Testimonial() {

  const [currentTestimonial, setCurrentTestimonial] = useState(TESTIMONIAL_DATA[0]);

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
    <Flex direction="column" align="center" justify="center" h={containerHeight} bg="#151a54">

      <Heading as="h1" color="white" size="2xl" textAlign="center" mb="50px">
        Testimonials
      </Heading>

      <Box
        bg="#202987"
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

        <Text color="white" fontSize="2xl" textAlign="center" mb="4">
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
            key={testimonial.name} 
            height={buttonHeight}
            padding={buttonPadding}
            flex="1"
            bg="#202987"
            color="white"
            fontSize="xl"
            textAlign={buttonTextAlign}
            justifyContent="center"
            borderRadius="20px"
            onClick={() => setCurrentTestimonial(testimonial)}
            _hover={{ bg: "#3a31a9" }}
            mt="20px"
          >

            <Flex flexDir="column">  
              <Text fontWeight="bold" fontSize="lg">{testimonial.name}</Text> 
              <Text color="white" fontWeight= "medium" fontSize="lg">{testimonial.position}</Text> 
            </Flex>

          </Button>
        ))}

      </Stack>

    </Flex>
  );

}

export default Testimonial;
