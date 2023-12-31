import React from 'react';
import { Box, VStack, Heading, Image, Button } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';
import company1 from '../Assets/port1.jpg';
import company2 from '../Assets/port2.jpg';
import company3 from '../Assets/port3.jpg';
import company4 from '../Assets/port4.jpg';
import company5 from '../Assets/port5.jpg';
import company6 from '../Assets/port6.jpg';

const Portfolio = () => {
  return (
    <Box
      backgroundColor="transparent"
      width="100%"
      paddingY="50px"
      zIndex={5}
      display="flex"
      flexDirection="column"
      alignItems="center"
      id="portfolio"
    >
      {/* Header */}
      <Heading as="h1" color="white" size="2xl" textAlign="center" marginX="auto" maxWidth="1000px">
        Portfolio
      </Heading>

      <Box
        display="grid"
        gridTemplateColumns={[
          "1fr",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
          "repeat(3, 1fr)"
        ]}
        gap={10}
        maxWidth="1000px"
        width="100%"
        margin="0 auto"
        padding="5%"
        alignItems="stretch"
        zIndex={5}
        justifyContent="center"
      >
        <BoxItem imageSrc={company1} linkUrl="https://acaoffice.com" />
        <BoxItem imageSrc={company2} linkUrl="https://crmarketing-horizon.vercel.app" />
        <BoxItem imageSrc={company3} linkUrl="https://jasonsautomation.vercel.app/" />
        <BoxItem imageSrc={company4} linkUrl="https://onlycanva.com" />
        <BoxItem imageSrc={company5} linkUrl="https://royal-oak-horizon.vercel.app/" />
        <BoxItem imageSrc={company6} linkUrl="https://sphere-three-mocha.vercel.app/" />
      </Box>

      <Button 
        colorScheme="blue"
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

const BoxItem = ({ imageSrc, linkUrl }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <VStack
      ref={ref}
      opacity={inView ? 1 : 0}
      transition="opacity 1s ease-out, transform 0.3s ease-out, box-shadow 0.2s ease-out"
      _hover={{ transform: "scale(1.07)", zIndex: 10, boxShadow: "10px 10px 15px rgba(0, 0, 0, 0.2)" }}
      backgroundColor="#202987"
      borderRadius="20px"
      padding="0"
      alignItems="center"
      spacing={4}
      zIndex={1}
    >
      <a href={linkUrl} target="_blank" rel="noopener noreferrer">
        <Image src={imageSrc} alt="Company Image" borderRadius="10px" objectFit="cover" width="100%" />
      </a>
    </VStack>
  );
};

export default Portfolio;
