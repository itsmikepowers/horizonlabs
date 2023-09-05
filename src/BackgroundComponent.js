// import { Box } from '@chakra-ui/react';
// import React from 'react';

// // Reusable ColoredCircle component
// const ColoredCircle = ({ width, height, bgColor, top, left, filterBlur, animationName }) => (
//     <Box
//         w={width}
//         h={height}
//         bg={bgColor}
//         borderRadius="50%"
//         pos="absolute"
//         top={top}
//         left={left}
//         transform="translate(-50%, -50%)"
//         filter={`blur(${filterBlur})`}
//         animation={`${animationName} 12s infinite`}
//     />
// );

// const BackgroundComponent = ({ children }) => {
//     return (
//         <Box className="background-component" pos="relative" w="100%" h="100vh" >
//             <Box w="100%" h="100vh" pos="absolute" top={0} left={0} zIndex={0} overflow="hidden">
//                 <ColoredCircle width="700px" height="700px" bgColor="#ff9050" top="60%" left="20%" filterBlur="100px" animationName="colorChangeOrange" />
//                 <ColoredCircle width="900px" height="900px" bgColor="#25b6f2" top="30%" left="70%" filterBlur="130px" animationName="colorChangeBlue" />
//                 <ColoredCircle width="800px" height="800px" bgColor="#fb4f59" top="70%" left="90%" filterBlur="110px" animationName="colorChangeRed" />
//                 <ColoredCircle width="700px" height="700px" bgColor="#4e2474" top="15%" left="40%" filterBlur="100px" animationName="colorChangePurple" />
//             </Box>
//             <Box zIndex={3}>
//                 {children}
//             </Box>
//         </Box>
//     );
// }

// export default BackgroundComponent;
