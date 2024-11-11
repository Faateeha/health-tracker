import { Box, Flex, Text, Image } from "@chakra-ui/react";
import rulerWeight from "./assets/rulerWeight.png";
import BMI from "./assets/bmi.png"
import Body from "./assets/body.png"
import Sub1 from "./assets/sub1.png"


export default function Right() {
  return (
    <Box p="4">
      <Text as="h3" fontSize="xl" fontWeight="bold" color="" p="4">
        BMI Calculator
      </Text>
      <Flex p="4" gap="4">
        {/* Left Column for Weight and Height */}
        <Flex direction="column" gap="4">
          {/* Weight Container */}
          <Box
            bg="#F8DEBD"
            p="4"
            borderRadius="md"
            boxShadow="md"
            width="200px"
            textAlign="center"
          >
            <Text fontWeight="bold">Weight</Text>
            <Text fontSize="lg" fontWeight="semibold">70 kg</Text>
            {/* Ruler Image */}
            <Image src={rulerWeight} alt="Weight Ruler" mt="2" width="100%" height="20px" />
          </Box>

          {/* Height Container */}
          <Box
            bg="#D0FBFF"
            p="4"
            borderRadius="md"
            boxShadow="md"
            width="200px"
            textAlign="center"
          >
            <Text fontWeight="bold">Height</Text>
            <Text fontSize="lg" fontWeight="semibold">175 cm</Text>
            {/* Ruler Image */}
            <Image src={rulerWeight} alt="Height Ruler" mt="2" width="100%" height="20px" />
          </Box>
        </Flex>

        {/* Right Column for BMI */}
        <Box
          bg="#4A4949"
          p="4"
          borderRadius="md"
          boxShadow="md"
          width="250px"
          textAlign=""
          color="white"
        >
          <Text fontWeight="semibold">Body Mass Index</Text>
          <Flex my="4" gap="12">
          <Text fontSize="lg" fontWeight="semibold">24.9</Text>
          <Text fontSize="lg" bg="#D6FFDD" p="1" fontWeight="semibold" color="black" borderRadius="md">You're healthy!</Text>
          </Flex>
          <Image src={BMI} alt="Height Ruler" mt="2" width="100%" height="80px" />

          
        </Box>
      </Flex>
      <hr />
      <Flex>
        <Box>
            <Text>hello</Text>
        </Box>
        <Box>
        <Image src={Body} alt="body" mt="2" width="100%" height="px" />
        <Image src={Sub1} alt="body" mt="2" width="100%" height="10px" />
        </Box>
      </Flex>
    </Box>
  );
}
