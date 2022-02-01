import { Box, Button, Flex, Heading, Icon, Table, Th, Thead, Tr, Checkbox, Tbody, Td, Text, useBreakpointValue } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import Link from 'next/link'

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px={[ "4", "4", "6" ]} >
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex md="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>

            <Link href="/users/create" passHref>
              <Button as="a" colorScheme="pink" size="sm" leftIcon={ <Icon fontSize="20" as={RiAddLine} /> }>
                Criar novo
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={[ "4", "4", "6" ]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th> 
                { isWideVersion && <Th>Data de cadastro</Th> }
                <Th w="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={[ "4", "4", "6" ]} >
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Nikolas Santana</Text>
                    <Text fontSize="sm" color="gray.300">nikolasdssantana@gmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>31 de janeiro, 2022</Td> }
                <Td>
                  { isWideVersion && <Button as="a" colorScheme="purple" size="sm" leftIcon={ <Icon fontSize="16" as={RiPencilLine} /> }>
                    Editar
                  </Button>
                  }
                </Td>
              </Tr>
              <Tr>
                <Td px={[ "4", "4", "6" ]} >
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Nikolas Santana</Text>
                    <Text fontSize="sm" color="gray.300">nikolasdssantana@gmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>31 de janeiro, 2022</Td> }
                <Td>
                  { isWideVersion && <Button as="a" colorScheme="purple" size="sm" leftIcon={ <Icon fontSize="16" as={RiPencilLine} /> }>
                    Editar
                  </Button>
                  }
                </Td>
              </Tr>
              <Tr>
                <Td px={[ "4", "4", "6" ]} >
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Nikolas Santana</Text>
                    <Text fontSize="sm" color="gray.300">nikolasdssantana@gmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>31 de janeiro, 2022</Td> }
                <Td>
                  { isWideVersion && <Button as="a" colorScheme="purple" size="sm" leftIcon={ <Icon fontSize="16" as={RiPencilLine} /> }>
                    Editar
                  </Button>
                  }
                </Td>
              </Tr>
              <Tr>
                <Td px={[ "4", "4", "6" ]} >
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Nikolas Santana</Text>
                    <Text fontSize="sm" color="gray.300">nikolasdssantana@gmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>31 de janeiro, 2022</Td> }
                <Td>
                  { isWideVersion && <Button as="a" colorScheme="purple" size="sm" leftIcon={ <Icon fontSize="16" as={RiPencilLine} /> }>
                    Editar
                  </Button>
                  }
                </Td>
              </Tr>
              <Tr>
                <Td px={[ "4", "4", "6" ]} >
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Nikolas Santana</Text>
                    <Text fontSize="sm" color="gray.300">nikolasdssantana@gmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>31 de janeiro, 2022</Td> }
                <Td>
                  { isWideVersion && <Button as="a" colorScheme="purple" size="sm" leftIcon={ <Icon fontSize="16" as={RiPencilLine} /> }>
                    Editar
                  </Button>
                  }
                </Td>
              </Tr>
              <Tr>
                <Td px={[ "4", "4", "6" ]} >
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Nikolas Santana</Text>
                    <Text fontSize="sm" color="gray.300">nikolasdssantana@gmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>31 de janeiro, 2022</Td> }
                <Td>
                  { isWideVersion && <Button as="a" colorScheme="purple" size="sm" leftIcon={ <Icon fontSize="16" as={RiPencilLine} /> }>
                    Editar
                  </Button>
                  }
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}