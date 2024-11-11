import { Bar } from "react-chartjs-2";
import { Box, Text } from "@chakra-ui/react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function ActivityGrowthChart() {
  // Sample data for Yoga, Meditation, and Aerobics
  const data = {
    labels: ["Nov 1", "Nov 2", "Nov 3", "Nov 4", "Nov 5", "Nov 6", "Nov 7", "Nov 8", "Nov 9", "Nov 10", "Nov 11", "Nov 12"],
    datasets: [
      {
        label: "Yoga",
        data: [30, 45, 40, 50, 55, 60, 70, 65, 60, 75, 80, 70],
        backgroundColor: "#CA6B6E", // Red with opacity
      },
      {
        label: "Meditation",
        data: [20, 35, 30, 40, 45, 50, 55, 60, 50, 65, 60, 55],
        backgroundColor: "#478F96", // Blue with opacity
      },
      {
        label: "Aerobics",
        data: [40, 50, 45, 60, 65, 70, 75, 80, 70, 85, 80, 75],
        backgroundColor: "#D08726", // Green with opacity
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: "Activity Level (%)",
        },
      },
      x: {
        title: {
          display: true,
          text: "Date",
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <Box p="4" bg="white" borderRadius="md" boxShadow="md" mt="3" width="100%">
      <Text fontSize="xl" fontWeight="bold" mb="4">
        Activity Growth Chart
      </Text>
      <Box width="100%" height={{ base: "300px", sm: "400px", md: "500px" }}>
        <Bar data={data} options={options} />
      </Box>
    </Box>
  );
}


