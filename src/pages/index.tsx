import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";

export default function Home() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        width="100%"
        maxW={420}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDirection="column"
      >
        <Text fontSize="2xl" mb="5" fontWeight="bold">
         Login com o DashGo
        </Text>
        <Stack spacing="4">
          <Input
            label="E-mail"        
            name="email"
            id="email"
            type="email"
            placeholder="E-mail"
          />

          <Input
            label="Senha"        
            name="password"
            id="password"
            type="password"
            placeholder="Senha"
          />
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
        >Entrar</Button>
      </Flex>
    </Flex>
  )
}
