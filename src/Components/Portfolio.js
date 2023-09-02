import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import logoImage from "../Assets/finalogopng.png";
import logoImage2 from "../Assets/netflix.png";
import logoImage3 from "../Assets/youtube.png";
import logoImage4 from "../Assets/vercel.png";
import logoImage5 from "../Assets/meta.png";

function ImageRow() {
  return (
    <Box maxW="1200px" mx="auto" display="flex" flexWrap="wrap">
      <Image src={logoImage} alt="Logo 1" />
      <Image src={logoImage2} alt="Logo 2" />
      <Image src={logoImage3} alt="Logo 3" />
      <Image src={logoImage4} alt="Logo 4" />
      <Image src={logoImage5} alt="Logo 5" />
    </Box>
  );
}

export default ImageRow;
