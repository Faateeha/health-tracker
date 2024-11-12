import { Flex, Box } from "@chakra-ui/react";
import Left from "./Left";
import Right from "./Right";

function App() {
  return (
    <Flex
      height="100%"
      direction={{ base: "column", lg: "row" }}
      width="100vw"
      bg="#FBEBD6"
      overflow="hidden"
    >
      {/* Left Side (Sidebar) */}
      <Box
        flex={{ base: "1", lg: "2" }} // Occupies more space on large screens
        width={{ base: "100%", lg: "66.66%" }} // Full width on small screens
        bg="#FBEBD6" // Match background on smaller screens
      >
        <Left />
      </Box>

      {/* Right Side (Main Content) */}
      <Box
        flex={{ base: "1", lg: "1" }} // Equal space as Left on smaller screens
        width={{ base: "100%", lg: "33.33%" }} // Full width on small screens
        bg="white"
        borderRadius={{ base: "none", lg: "2xl" }} // Remove border-radius for small screens
      >
        <Right />
      </Box>
    </Flex>
  );
}

export default App;

