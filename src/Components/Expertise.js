import React from 'react';
import { Box, Text, VStack, HStack } from '@chakra-ui/react';
import { ReactIcon, EditIcon, LockIcon } from '@chakra-ui/icons';
import { AiOutlineRobot } from 'react-icons/ai';
import { useInView } from 'react-intersection-observer';

const Expertise = () => {
  return (
    <Box
      backgroundColor="#151a54"
      width="100%"
      paddingY="50px"
      zIndex={5}
    >
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
          icon={<ReactIcon boxSize={8} />}
          label="Web Development"
          description="Our team blends cutting-edge technologies with their vast experience to craft websites that are both visually appealing and functionally robust."
        />
        <BoxItem
          icon={<AiOutlineRobot size="2em" />}
          label="AI Automation"
          description="We design our AI solutions not just for automation, but to drive innovation and strategic insights."
        />
        <BoxItem
          icon={<EditIcon boxSize={8} />}
          label="Design Services"
          description="Great design tells a story. Our team is dedicated to translating this into designs that captivate and resonate."
        />
        <BoxItem
          icon={<LockIcon boxSize={8} />}
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
      transition="opacity 1s ease-out, transform 0.3s ease-out" 
      _hover={{ transform: "scale(1.07)", zIndex: 10 }}
      backgroundColor="#202987"
      borderRadius="20px"
      padding="50px"
      alignItems="start"
      spacing={4}
      width="100%"
      height="100%"
      zIndex={1}
    >
      <HStack spacing={2}>
        {React.cloneElement(icon, { color: "white" })} 
        <Text fontSize="2xl" fontWeight="bold" color="white">{label}</Text>
      </HStack>
      <Text fontSize="md" color="gray.200" maxWidth="100%" lineHeight={1.6}>
        {description}
      </Text>
    </VStack>
  );
};

export default Expertise;
