import { Box, Container, Text, Link } from "@chakra-ui/react";

function Horizon() {
  return (
    <Box width="100%" height="80px" bg="#151a54" color="white">
      <Container maxWidth="1200px" display="flex" justifyContent="space-between" alignItems="center" height="100%">
        <Text fontWeight="bold">© 2023 Horizon Labs. All Rights Reserved.</Text>
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
