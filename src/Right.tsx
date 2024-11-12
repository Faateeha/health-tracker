import { Box, Flex, Text, Image } from "@chakra-ui/react";
import rulerWeight from "./assets/rulerWeight.png";
import BMI from "./assets/bmi.png";
import Body from "./assets/body.png";
import Sub2 from "./assets/sub2.png";
import Ar1 from "./assets/Ar1.png";
import Ar2 from "./assets/Ar2.png";

export default function Right() {
  return (
    <Box p="4">
      <Text as="h3" fontSize="xl" fontWeight="bold" color="black" pl="2">
        BMI Calculator
      </Text>
      <Flex direction={{ base: "column", lg: "row" }} p="4" gap="4">
        {/* Left Column for Weight and Height */}
        <Flex direction="column" gap="4">
          {/* Weight Container */}
          <Box
            bg="#F8DEBD"
            p="4"
            borderRadius="md"
            boxShadow="md"
            width={{ base: "100%", lg: "200px" }}
            textAlign="center"
            color="black"
          >
            <Text fontWeight="bold" color="black">Weight</Text>
            <Text fontSize="lg" fontWeight="semibold" color="black">
              70 kg
            </Text>
            {/* Ruler Image */}
            <Box display="flex" justifyContent="center" mt="2">
              <Image
                src={rulerWeight}
                alt="Weight Ruler"
                width="50%"
                height="20px"
              />
            </Box>
          </Box>

          {/* Height Container */}
          <Box
            bg="#D0FBFF"
            p="4"
            borderRadius="md"
            boxShadow="md"
            width={{ base: "100%", lg: "200px" }}
            textAlign="center"
            color="black"
          >
            <Text fontWeight="bold" color="black">Height</Text>
            <Text fontSize="lg" color="black" fontWeight="semibold">
              175 cm
            </Text>
            {/* Ruler Image */}
            <Box display="flex" justifyContent="center" mt="2">
              <Image
                src={rulerWeight}
                alt="Weight Ruler"
                width="50%"
                height="20px"
              />
            </Box>
          </Box>
        </Flex>

        {/* Right Column for BMI */}
        <Box
          bg="#4A4949"
          p="4"
          borderRadius="md"
          boxShadow="md"
          width={{ base: "100%", lg: "250px" }}
          textAlign=""
          color="white"
        >
          <Text fontWeight="semibold">Body Mass Index</Text>
          <Flex my="4" gap="12">
            <Text fontSize="lg" fontWeight="semibold">
              24.9
            </Text>
            <Text
              fontSize="lg"
              bg="#D6FFDD"
              p="1"
              fontWeight="semibold"
              color="black"
              borderRadius="md"
            >
              You're healthy!
            </Text>
          </Flex>
          <Image
            src={BMI}
            alt="Height Ruler"
            mt="2"
            width="100%"
            height="80px"
          />
        </Box>
      </Flex>
      <hr />
      <Flex justifyContent="space-between" alignItems="flex-start" mt="6" p="4">
        {/* Text on the left */}
        <Flex direction="column">
          <Text as="h2" fontSize="lg" fontWeight="bold" color="black">
            Body Measurements
          </Text>
          <Text color="black">Last checked 2 Days Ago</Text>
          <Text bg="gray.200" color="black" p="1" my="2" borderRadius="md">
            Inverted Triangle Body Shape
          </Text>

          <Box mt="16">
            <Box
              bg="#4A4949"
              color="white"
              mb="2"
              borderRadius="lg"
              width="120px"
              p="4"
            >
              <Text>Chest (in)</Text>
              <Text display="inline-flex" alignItems="center">
                44.5
                <Box as="span" ml="1" display="inline-flex">
                  <Image src={Ar1} alt="arrow icon" />
                </Box>
              </Text>
            </Box>

            <Box
              bg="#4A4949"
              color="white"
              mb="2"
              borderRadius="lg"
              width="120px"
              p="4"
            >
              <Text>Waist (in)</Text>
              <Text display="inline-flex" alignItems="center">
                34
                <Box as="span" ml="1" display="inline-flex">
                  <Image src={Ar2} alt="arrow icon" />
                </Box>
              </Text>
            </Box>

            <Box
              bg="#4A4949"
              color="white"
              mb="2"
              borderRadius="lg"
              width="120px"
              p="4"
            >
              <Text>Hip (in)</Text>
              <Text display="inline-flex" alignItems="center">
                42.5
                <Box as="span" ml="1" display="inline-flex">
                  <Image src={Ar2} alt="arrow icon" />
                </Box>
              </Text>
            </Box>
          </Box>
        </Flex>

        {/* Image container on the right */}
        <Box position="relative" width="150px" height="350px" mt="8">
          <Image src={Body} alt="body" />

          {/* Sub Image positioned over Body Image */}
          <Image
            src={Sub2}
            alt="sub-image"
            position="absolute"
            top="12"
            left="0"
            width="100%"
            height="10px"
          />
          <Image
            src={Sub2}
            alt="sub-image"
            position="absolute"
            top="24"
            left="0"
            width="100%"
            height="10px"
          />
          <Image
            src={Sub2}
            alt="sub-image"
            position="absolute"
            top="32"
            left="0"
            width="100%"
            height="10px"
          />
        </Box>
      </Flex>
    </Box>
  );
}
