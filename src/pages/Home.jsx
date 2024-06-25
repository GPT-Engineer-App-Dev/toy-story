import { Box, Heading, Text, SimpleGrid, Image, VStack } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box p={4}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">Welcome to the Toys World</Heading>
        <Text fontSize="lg">Discover a wide range of toys for all ages. From classic toys to the latest trends, we have something for everyone.</Text>
        <Heading as="h2" size="xl">Featured Toys</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box>
            <Image src="/images/toy1.jpg" alt="Toy 1" />
            <Text mt={2}>Toy 1</Text>
          </Box>
          <Box>
            <Image src="/images/toy2.jpg" alt="Toy 2" />
            <Text mt={2}>Toy 2</Text>
          </Box>
          <Box>
            <Image src="/images/toy3.jpg" alt="Toy 3" />
            <Text mt={2}>Toy 3</Text>
          </Box>
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default Home;