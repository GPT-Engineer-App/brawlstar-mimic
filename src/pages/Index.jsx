import React from "react";
import { Box, Button, Flex, Heading, Image, Text, VStack, Grid, useColorMode, IconButton, useColorModeValue } from "@chakra-ui/react";
import { FaSun, FaMoon, FaPlay, FaCog } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const color = useColorModeValue("black", "white");

  return (
    <Box textAlign="center" fontSize="xl" bg={bgColor} color={color} minHeight="100vh">
      <Flex p={5} justifyContent="space-between" alignItems="center">
        <Heading>BrawlStars Inspired Game</Heading>
        <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} isRound={true} size="lg" alignSelf="flex-end" onClick={toggleColorMode} />
      </Flex>
      <VStack spacing={8}>
        <Image src="https://images.unsplash.com/photo-1577086664693-894d8405334a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxnYW1lJTIwbWFwJTIwYnJhd2xzdGFyc3xlbnwwfHx8fDE3MTQyMjY3MzV8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
        <Text>Welcome to our BrawlStars inspired game!</Text>
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <Button leftIcon={<FaPlay />} colorScheme="teal" variant="solid">
            Play
          </Button>
          <Button leftIcon={<FaCog />} colorScheme="pink" variant="outline">
            Settings
          </Button>
        </Grid>
      </VStack>
    </Box>
  );
};

export default Index;
