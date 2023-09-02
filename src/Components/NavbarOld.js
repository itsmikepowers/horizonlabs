import { Box, Flex, Link, Image, IconButton, useBreakpointValue, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import logo from '../Assets/logo.png'; 

function Navbar() {
    const display = useBreakpointValue({ base: "none", md: "flex" });
    const btnDisplay = useBreakpointValue({ base: "block", md: "none" });

    return (
        <Box bg="teal.500" px={4} color="white">
            <Flex h={32} alignItems={'center'} justifyContent={'space-between'} maxW="1200px" mx="auto" fontSize="2xl">
                <Box>
                    <Link href="/" fontWeight="bold">
                        <Image src={logo} alt="Logo" h="5rem" />
                    </Link>
                </Box>

                {/* Menu for Medium Screens and Above */}
                <Box display={display}>
                    <Link href="/about" mr={8} fontWeight="bold">
                        About
                    </Link>
                    <Link href="/services" mr={8} fontWeight="bold">
                        Services
                    </Link>
                    <Link href="/contact" fontWeight="bold">
                        Contact
                    </Link>
                </Box>

                {/* Dropdown for Smaller Screens */}
                <Menu>
                    <MenuButton as={IconButton} display={btnDisplay} icon={<HamburgerIcon />} />
                    <MenuList>
                        <MenuItem as={Link} href="/about" fontWeight="bold" fontSize="xl" color="black">
                            About
                        </MenuItem>
                        <MenuItem as={Link} href="/services" fontWeight="bold" fontSize="xl" color="black">
                            Services
                        </MenuItem>
                        <MenuItem as={Link} href="/contact" fontWeight="bold" fontSize="xl" color="black">
                            Contact
                        </MenuItem>
                    </MenuList>
                </Menu>

            </Flex>
        </Box>
    );
}

export default Navbar;
