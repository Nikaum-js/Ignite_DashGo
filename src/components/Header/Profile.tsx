import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Nikolas Santana</Text>
        <Text color="gray.300" fontSize="small">
          Nikolasdssantana@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Nikolas Santana" src="https://github.com/Nikolas-as.png" />
    </Flex>
  );
}