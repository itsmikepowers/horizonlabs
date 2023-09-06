import { Box, Image, Center, Text, Heading, useBreakpointValue } from "@chakra-ui/react";
import { useInView } from 'react-intersection-observer';
import ball from '../Assets/ball.gif'

function What() {

  const headerMarginBottom = useBreakpointValue({ base: "10px", md: "50px" });

  const [refOne, inViewBlue] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [refTwo, inViewGreen] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [refThree, inViewRed] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const flexDirection = useBreakpointValue({ base: "column", md: "row" });

  return (
    <Center minHeight="100vh" backgroundColor="transparent" id="about">
      <Box zIndex={10} display="flex" flexDirection="column" alignItems="center" maxWidth="1000px" width="100%">
        
        {/* Header */}
        <Box marginBottom={headerMarginBottom}>
          <Heading as="h1" color="white" size="2xl">What We Do</Heading>
        </Box>

        {/* Main Content */}
        <Box display="flex" flexDirection={flexDirection} width="100%">
          {/* Left Section */}
          <Box width={{ base: "100%", md: "40%" }} padding="20px" display="flex" flexDirection="column">
            
            {/* Blue Box */}
            <Box 
                ref={refOne} 
                opacity={inViewBlue ? 1 : 0} 
                transition="opacity 1s ease-out, transform 0.3s ease-out, box-shadow 0.2s ease-out"
                _hover={{ transform: "scale(1.07)", zIndex: 10, boxShadow: "10px 10px 15px rgba(0, 0, 0, 0.2)" }}
                background="linear-gradient(to bottom right, #202987, #151a54)"
                flex="1" 
                backgroundColor="#202987" 
                marginBottom="20px" 
                borderRadius="20px" 
                padding="30px" 
                display="flex" 
                flexDirection="column" 
                justifyContent="center" 
                alignItems="flex-start">
                <Heading size="md" fontWeight="bold" color="white">Digital Development</Heading>
                <Text color="gray.200">Websites, Apps, Startup MVP's, Automations and AI, we can build any solution to fit your business.</Text>
            </Box>

            {/* Green Box */}
            <Box 
                ref={refTwo} 
                opacity={inViewGreen ? 1 : 0} 
                transition="opacity 1s ease-out, transform 0.3s ease-out, box-shadow 0.2s ease-out"
                _hover={{ transform: "scale(1.07)", zIndex: 10, boxShadow: "10px 10px 15px rgba(0, 0, 0, 0.2)" }}
                background="linear-gradient(to bottom right, #202987, #151a54)"
                flex="1" 
                backgroundColor="#202987" 
                marginBottom="20px" 
                borderRadius="20px" 
                padding="30px" 
                display="flex" 
                flexDirection="column" 
                justifyContent="center" 
                alignItems="flex-start">
                <Heading size="md" fontWeight="bold" color="white">Custom Solutions</Heading>
                <Text color="gray.200">Everything we build is fully custom, crafted to perfection, to ensure the highest quality product possible.</Text>
            </Box>

            {/* Red Box */}
            <Box 
                ref={refThree} 
                opacity={inViewRed ? 1 : 0} 
                transition="opacity 1s ease-out, transform 0.3s ease-out, box-shadow 0.2s ease-out"
                _hover={{ transform: "scale(1.07)", zIndex: 10, boxShadow: "10px 10px 15px rgba(0, 0, 0, 0.2)" }}
                background="linear-gradient(to bottom right, #202987, #151a54)"
                flex="1" 
                backgroundColor="#202987" 
                borderRadius="20px" 
                padding="30px" 
                display="flex" 
                flexDirection="column" 
                justifyContent="center" 
                alignItems="flex-start">
                <Heading size="md" fontWeight="bold" color="white">Unlimited Building</Heading>
                <Text color="gray.200">We dont rest until your happy, making sure everything is pixel perfect.</Text>
            </Box>
          </Box>
          
          {/* Right Section */}
          <Box width={{ base: "100%", md: "60%" }} padding="20px" marginTop={{ base: "20px", md: "0" }}>
            <Image src={ball} alt="Stock Photo" width="100%" borderRadius="5px"/>
          </Box>
        </Box>
      </Box>
    </Center>
  );
}

export default What;
