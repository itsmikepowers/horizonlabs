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
import logo from '../Assets/logo.png';

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

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isOpen, onClose]);

    return (
        <Box bg="transparent" p={8} zIndex={9000} color="white" minHeight={{ base: "125px", lg: "auto" }}>
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
                <Flex display={{ base: "none", lg: "flex" }} alignItems="center">
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
                        <Link href="#What-you-get" fontWeight="medium" fontSize="xl">About</Link>
                        <Box width="30px" />
                        <Link href="#Pricing" fontWeight="medium" fontSize="xl">Services</Link> 
                        <Box width="30px" />
                        <Link href="#last-projects" fontWeight="medium" fontSize="xl">Portfolio</Link> 
                        <Box width="30px" />
                        <Link href="#Testimonial" fontWeight="medium" fontSize="xl">Testimonial</Link> 
                    </Flex>
                </Flex>

                <Box ml={3} display={{ base: "none", lg: "block" }}>
                    <Button as="a" target="_blank" colorScheme="blue" size="xl" borderRadius="20px" fontSize="xl" p={4}> 
                        Contact
                    </Button>
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
                    <Link href="#What-you-get" fontWeight="bold" fontSize="xl" mb={4} onClick={onClose}>About</Link>
                    <Link href="#Pricing" fontWeight="bold" fontSize="xl" mb={4} onClick={onClose}>Services</Link>
                    <Link href="#last-projects" fontWeight="bold" fontSize="xl" mb={4} onClick={onClose}>Portfolio</Link>
                    <Link href="#Testimonial" fontWeight="bold" fontSize="xl" mb={4} onClick={onClose}>Testimonial</Link>
                    <Button as="a" target="_blank" colorScheme="blue" size="xl" borderRadius="20px" fontSize="xl" p={4} onClick={onClose}> 
                        Contact
                    </Button>
                </Flex>
            </Flex>
        </Box>
    );
}

export default Navbar;