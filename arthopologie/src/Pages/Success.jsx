import { Box, Heading, Center } from '@chakra-ui/react';
// import { CheckCircleIcon } from '@chakra-ui/icons';
import { AiOutlineCheckCircle } from "react-icons/ai";
export default function Success() {
  return (
    <Box textAlign="center" py={10} px={6}>
        <Center>
      <AiOutlineCheckCircle  size={"200"} color={'green'} />
      </Center>
      <Heading as="h2" size="xl" mt={6} mb={2} color={"blue.300"}>
      YOUR ORDER IS BOOKED SUCCESSFULLY ...
      </Heading>
      {/* <Text color={'gray.500'}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </Text> */}
    </Box>
  );
}
// AiOutlineCheckCircle