import { Flex, Box } from "@chakra-ui/react";
import Left from "./Left";  // Import your Left component
import Right from "./Right"; // Assuming you have a Right component for the main content

function YourComponent() {
  return (
    <Flex height="100vh" width="100vw">
      {/* Left Side (Sidebar) */}
      <Box width="250px" bg="gray.200">
        <Left />
      </Box>

      {/* Right Side (Main Content) */}
      <Box flex="1" bg="gray.300">
        <Right />
      </Box>
    </Flex>
  );
}

export default YourComponent;

