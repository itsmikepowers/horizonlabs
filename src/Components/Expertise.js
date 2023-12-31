import React from 'react';
import { Box, Text, VStack, HStack, Heading } from '@chakra-ui/react';
import { ReactIcon, EditIcon, LockIcon } from '@chakra-ui/icons';
import { AiOutlineRobot } from 'react-icons/ai';
import { useInView } from 'react-intersection-observer';

const Expertise = () => {
  return (
    <Box
      backgroundColor="transparent"
      width="100%"
      paddingY="50px"
      zIndex={5}
      id="services"
    >
      <Heading as="h1" color="white" size="2xl" textAlign="center" marginX="auto" maxWidth="1000px">
        Our Expertise
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)"]}
        gap={10}
        maxWidth="1000px"
        width="100%"
        margin="0 auto"
        padding="5%"
        alignItems="stretch"
        zIndex={5}
      >
        <BoxItem
          icon={<ReactIcon boxSize={8} color="#ff9050" />}
          label="Web Development"
          description="We blend cutting edge tech with advanced development techniques to bring you the highest quality website, App, Startup MVP or AI Solution."
        />
        <BoxItem
          icon={<AiOutlineRobot size="2em" color="#25b6f2" />}
          label="AI Automation"
          description="Our solutions are fully custom and excellerated with AI, making development faster and more efficient than ever."
        />
        <BoxItem
          icon={<EditIcon boxSize={8} color="#fb4f59" />}
          label="Design Services"
          description="Great design is the forefront of our business. We know that great products are intutive, easy to use, visually stunning."
        />
        <BoxItem
          icon={<LockIcon boxSize={8} color="#8013ac" />}
          label="IT Security"
          description="We equip businesses with advanced tools and strategies to fend off potential threats, ensuring your digital realm is fortified and trustworthy."
        />
      </Box>
    </Box>
  );
};

const BoxItem = ({ icon, label, description }) => {
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
      background="linear-gradient(to bottom right, #202987, #151a54)"
      borderRadius="20px"
      padding="50px"
      alignItems="start"
      spacing={4}
      width="100%"
      height="100%"
      zIndex={1}
    >
      <HStack spacing={2}>
        {icon}
        <Text fontSize="2xl" fontWeight="bold" color="white">{label}</Text>
      </HStack>
      <Text fontSize="md" color="gray.200" maxWidth="100%" lineHeight={1.6}>
        {description}
      </Text>
    </VStack>
  );
};

export default Expertise;
