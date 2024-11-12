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
        flex={{ base: "1", lg: "2" }} 
        width={{ base: "100%", lg: "66.66%" }} 
        bg="#FBEBD6" 
      >
        <Left />
      </Box>

      <Box
        flex={{ base: "1", lg: "1" }} 
        width={{ base: "100%", lg: "33.33%" }} 
        bg="white"
        borderRadius={{ base: "none", lg: "2xl" }} 
      >
        <Right />
      </Box>
    </Flex>
  );
}

export default App;

