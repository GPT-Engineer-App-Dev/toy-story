import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const History = () => {
  return (
    <Box p={4}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">History of Toys</Heading>
        <Text fontSize="lg">
          Toys have been an integral part of human culture for thousands of years. From ancient civilizations to modern times, toys have evolved significantly.
        </Text>
        <Text fontSize="md">
          In ancient Egypt, children played with dolls made of stone, pottery, and wood. In ancient Greece and Rome, children played with dolls made of wax or terracotta, sticks, bows and arrows, and yo-yos.
        </Text>
        <Text fontSize="md">
          During the Middle Ages, toys were made from materials such as wood and metal. The industrial revolution brought mass production of toys, making them more accessible to children from all socioeconomic backgrounds.
        </Text>
        <Text fontSize="md">
          Today, toys are made from a variety of materials, including plastic, and are designed to entertain and educate children. The toy industry continues to innovate, creating new and exciting toys for children of all ages.
        </Text>
      </VStack>
    </Box>
  );
};

export default History;