import { Box, Flex, Image, Text } from "@chakra-ui/react";
import One from "./assets/1..png";
import Two from "./assets/2..png";
import Three from "./assets/3..png";
import Four from "./assets/4..png";
import Five from "./assets/5..png";
import Six from "./assets/6..png";
import Seven from "./assets/7..png";
import Bs from './assets/bs.png'
import Bp from './assets/bp.png'
import Hr from './assets/hr.png'
import { Sparklines, SparklinesLine } from "react-sparklines";
import Chart from './Chart'

export default function Left() {
  const bloodSugarData = [80, 85, 90, 85, 80, 82, 88];
  const heartRateData = [72, 75, 78, 74, 72, 73, 76];
  const bloodPressureData = [120, 122, 119, 121, 123, 120, 119];

  return (
    <Flex height="100%" direction="row">
      {/* Sidebar */}
      <Box width={{ base: "100%", lg: "150px" }} bg="white" py="4" pl={{ lg: "8" }} display={{ base: "none", sm: "none", lg: "block" }}>
        <Image src={One} alt="one" p="4" pb="12" />
        <Image src={Two} alt="two" p="2" />
        <Image src={Three} alt="three" p="2" />
        <Image src={Four} alt="four" p="2" />
        <Image src={Five} alt="five" p="2" />
        <Image src={Six} alt="six" p="2" />
        <Image src={Seven} alt="seven" p="2" />
      </Box>

      <Box flex="1" bgGradient="to-r" gradientFrom="#F8DEBD" gradientTo ="#FBEBD6" p="4">
        <Text as="h3" fontSize="3xl" fontWeight="bold" color="black">
          Health Overview
        </Text>
        <Text fontSize="lg" color="gray.500">
          November 12, 2021
        </Text>

        <Flex
          direction={{ base: "column", md: "row" }}
          py="4"
          gap="4"
          align="stretch"
          justify="space-between"
          maxWidth="100%"
          mx="auto"
          wrap="wrap"
        >
          {/* Blood Sugar Card */}
          <Box
            bg="white"
            p="4"
            borderRadius="md"
            boxShadow="md"
            display="flex"
            alignItems="center"
            gap="4"
            flex="1"
            width={{ base: "100%", md: "auto" }}
          >
            <Image src={Bs} alt="Blood Sugar" boxSize="50px" />
            <Box>
              <Text fontSize="lg" fontWeight="bold">Blood Sugar</Text>
              <Text color="gray.500">80 mg/dl</Text>
              <Text color="#F3A53F" fontWeight="bold">Normal</Text>
              <Sparklines data={bloodSugarData} width={100} height={50}>
                <SparklinesLine color="#F3A53F" />
              </Sparklines>
            </Box>
          </Box>

          {/* Heart Rate Card */}
          <Box
            bg="white"
            p="4"
            borderRadius="md"
            boxShadow="md"
            display="flex"
            alignItems="center"
            gap="4"
            flex="1"
            width={{ base: "100%", md: "auto" }}
          >
            <Image src={Hr} alt="Heart Rate" boxSize="50px" />
            <Box>
              <Text fontSize="lg" fontWeight="bold">Heart Rate</Text>
              <Text color="gray.500">80 bpm</Text>
              <Text color="#CA6B6E" fontWeight="bold">Normal</Text>
              <Sparklines data={heartRateData} width={100} height={50}>
                <SparklinesLine color="#CA6B6E" />
              </Sparklines>
            </Box>
          </Box>

          {/* Blood Pressure Card */}
          <Box
            bg="white"
            p="4"
            borderRadius="md"
            boxShadow="md"
            display="flex"
            alignItems="center"
            gap="4"
            flex="1"
            width={{ base: "100%", md: "auto" }}
          >
            <Image src={Bp} alt="Blood Pressure" boxSize="50px" />
            <Box>
              <Text fontSize="lg" fontWeight="bold">Blood Pressure</Text>
              <Text color="gray.500">120/80 mmHg</Text>
              <Text color="#478F96" fontWeight="bold">Normal</Text>
              <Sparklines data={bloodPressureData} width={100} height={50}>
                <SparklinesLine color="#478F96" />
              </Sparklines>
            </Box>
          </Box>
        </Flex>

        <Chart />

        <Flex
          direction={{ base: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          bg="white"
          p="4"
          mt="12"
          borderRadius="md"
          boxShadow="md"
          gap="4"
          width="100%"
        >
          <Text fontSize="lg" fontWeight="bold" color="black">
            Upcoming Appointment
          </Text>

          <Box
            bg="lightblue"
            p="2"
            borderRadius="md"
            textAlign="center"
            fontWeight="semibold"
          >
            November 20, 2024
          </Box>

          <Text fontSize="md">Consultation with Dr. James</Text>
        </Flex>
      </Box>
    </Flex>
  );
}
