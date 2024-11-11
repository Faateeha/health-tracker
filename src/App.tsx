import { Flex, Box } from "@chakra-ui/react";
import Left from "./Left";  
import Right from "./Right"; 

function App() {
  return (
    <Flex height="100%"  direction={{ base: "column", lg: "row" }} width="100vw" bg="#FBEBD6" overflow="hidden">
      {/* Left Side (Sidebar) */}
      <Box width="66.66%" >
        <Left />
      </Box>

      {/* Right Side (Main Content) */}
      <Box width="33.33%" bg="white" borderRadius="2xl" >
        <Right />
      </Box>
    </Flex>
  );
}

export default App;

