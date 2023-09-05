import { Box, Container, Text, Link } from "@chakra-ui/react";

function Horizon() {
  return (
    <Box width="100%" bg="transparent" color="white" py={4}>
      <Container
        maxWidth="1200px"
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        textAlign={{ base: "center", md: "left" }}
        spacing={4}
      >
        <Text fontWeight="bold" mb={{ base: 2, md: 0 }}>
          © 2023 Horizon Labs. All Rights Reserved.
        </Text>
        <Text fontWeight="bold">
          Developed by{' '}
          <Link 
            href="https://www.horizonlabsai.com" 
            isExternal 
            color="white" 
            textDecoration="none" 
            _hover={{ 
              color: "gray.400",
              textDecoration: "none" 
            }}
          >
            Horizon Labs
          </Link>
        </Text>
      </Container>
    </Box>
  );
}

export default Horizon;
