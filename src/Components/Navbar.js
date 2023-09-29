import React, { useEffect } from 'react';
import {
    Box,
    Flex,
    Image,
    Link,
    Button,
    Icon,
    Text,
    useDisclosure
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import logo from '../Assets/logosmall.png';
import { Link as RouterLink } from 'react-router-dom';

function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        const handleResize = () => {
            // If screen width is greater than 992px and mobile menu is open, close it.
            if (window.innerWidth >= 992 && isOpen) {
                onClose();
            }
        };

        // Add event listener
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isOpen, onClose]);

    return (
        <Box bg="transparent" p={8} zIndex={3000} color="white" minHeight={{ base: "125px", lg: "auto" }}>
            <Flex maxWidth="1200px" mx="auto" width="100%" alignItems="center" justifyContent="space-between">

                {/* Mobile Sticky Header */}
                <Flex 
                    display={{ base: "flex", lg: "none" }} 
                    position="fixed" 
                    top={0} 
                    left={0} 
                    right={0} 
                    p={4} 
                    m={4} 
                    zIndex={9000} 
                    alignItems="center" 
                    justifyContent="space-between"
                    bg="rgba(255,255,255,0.1)" 
                    boxShadow="0px 4px 10px rgba(0,0,0,0.1)"
                    borderRadius="20px"
                    backdropFilter="blur(5px)" 
                    
                >
                    <Flex alignItems="center">
                        <Link href="/" aria-label="home">
                            <Image src={logo} alt="logo" width="60px" height="60px" />
                        </Link>
                        <Text ml={3} fontSize="2xl" fontWeight="bold">Horizon Labs</Text>
                    </Flex>
                    <Box 
                        transition="opacity 1s ease"
                    >
                        <Icon 
                            as={isOpen ? CloseIcon : HamburgerIcon} 
                            boxSize={isOpen ? "24px" : "32px"} 
                            onClick={isOpen ? onClose : onOpen} 
                        />
                    </Box>
                </Flex>

                {/* Desktop Logo */}
                <Flex zIndex={1000} display={{ base: "none", lg: "flex" }} alignItems="center">
                    <Link href="/" aria-label="home">
                        <Image src={logo} alt="logo" width="60px" height="60px" />
                    </Link>
                    <Text ml={3} fontSize="2xl" fontWeight="bold">Horizon Labs</Text>
                </Flex>

                {/* Desktop Menu */}
                <Flex flexGrow={1} justifyContent="center" top="0">
                    <Flex 
                        display={{ base: "none", lg: "flex" }} 
                        borderRadius="20px"
                        bg="rgba(255,255,255,0.1)"
                        boxShadow="0px 4px 10px rgba(0,0,0,0.1)"
                        p={4}
                        direction="row"
                        alignItems="center"
                        position={"fixed"}
                        transform={"translateY(-50%)"}
                        backdropFilter="blur(5px)" 
                        zIndex={9000} 
                    >
                        <Link href="#about" fontWeight="medium" fontSize="xl">About</Link>
                        <Box width="30px" />
                        <Link href="#services" fontWeight="medium" fontSize="xl">Services</Link> 
                        <Box width="30px" />
                        <RouterLink to="/blog">
                            <Text 
                            fontWeight="medium" 
                            fontSize="xl"
                            _hover={{ textDecoration: 'underline' }}  // Add this line
                            >
                            Blog
                            </Text>
                        </RouterLink>
                        <Box width="30px" />
                        <Link href="#portfolio" fontWeight="medium" fontSize="xl">Portfolio</Link> 
                        <Box width="30px" />
                        <Link href="#testimonal" fontWeight="medium" fontSize="xl">Testimonial</Link> 
                    </Flex>
                </Flex>

                <Box ml={3} display={{ base: "none", lg: "block" }}>
                    <Link 
                        href="https://calendly.com/horizonlabsai/discovery-call" 
                        isExternal
                        _hover={{
                            textDecoration: 'none', // To remove underline on hover
                        }}
                    >
                        <Button 
                            colorScheme="blue" 
                            zIndex="10000"
                            size="xl" 
                            borderRadius="20px" 
                            fontSize="xl" 
                            p={4}
                        > 
                            Contact
                        </Button>
                    </Link>
                </Box>

                {/* Mobile Menu */}
                <Flex
                    direction="column"
                    position={"fixed"}
                    top="125px"
                    right="0"
                    left={0} 
                    width="70%"
                    zIndex={9000}
                    bg="rgba(255,255,255,0.1)"
                    p={4}
                    mx="auto"
                    boxShadow="0px 4px 10px rgba(0,0,0,0.1)"
                    borderRadius="20px"
                    alignItems="center"
                    backdropFilter="blur(5px)" 
                    opacity={isOpen ? 1 : 0} // Control the visibility with opacity
                    transition="opacity 0.3s ease" // This will make it fade in/out smoothly
                    pointerEvents={isOpen ? "auto" : "none"} // Disable events when the menu isn't visible
                >
                    <Link href="#about" fontWeight="bold" fontSize="xl" mb={4} onClick={onClose}>About</Link>
                    <Link href="#services" fontWeight="bold" fontSize="xl" mb={4} onClick={onClose}>Services</Link>
                    <Link href="#portfolio" fontWeight="bold" fontSize="xl" mb={4} onClick={onClose}>Portfolio</Link>
                    <Link href="#testimonal" fontWeight="bold" fontSize="xl" mb={4} onClick={onClose}>Testimonial</Link>
                    <Link 
                        href="https://calendly.com/horizonlabsai/discovery-call" 
                        isExternal
                        _hover={{
                            textDecoration: 'none', // To remove underline on hover
                        }}
                    >
                        <Button 
                            colorScheme="blue" 
                            zIndex="10000"
                            size="xl" 
                            borderRadius="20px" 
                            fontSize="xl" 
                            p={4}
                        > 
                            Contact
                        </Button>
                    </Link>
                </Flex>
            </Flex>
        </Box>
    );
}

export default Navbar;