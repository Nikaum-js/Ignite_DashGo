import { Box, Button, Stack } from "@chakra-ui/react";

export function Pagination() {
  return (
    <Stack direction="row"mt="8" justify="space-between" align="center" spacing="6">
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong></strong>
      </Box>

      <Stack direction="row" spacing="2">
        <Button
          size="sm"
          w="4"
          colorScheme="pink"
          fontSize="xr"
          disabled
          _disabled={{
            bg: 'pink.500',
            cursor: 'default'
          }}
        >
          1
        </Button>

        <Button
          size="sm"
          w="4"
          colorScheme="gray.700"
          fontSize="xr"
          _hover={{
            bg: 'gray.500'
          }}
        >
          2
        </Button>

        <Button
          size="sm"
          w="4"
          colorScheme="gray.700"
          fontSize="xr"
          _hover={{
            bg: 'gray.500'
          }}
        >
          3
        </Button>

        <Button
          size="sm"
          w="4"
          colorScheme="gray.700"
          fontSize="xr"
          _hover={{
            bg: 'gray.500'
          }}
        >
          4
        </Button>

        <Button
          size="sm"
          w="4"
          colorScheme="gray.700"
          fontSize="xr"
          _hover={{
            bg: 'gray.500'
          }}
        >
          5
        </Button>

        <Button
          size="sm"
          w="4"
          colorScheme="gray.700"
          fontSize="xr"
          _hover={{
            bg: 'gray.500'
          }}
        >
          6
        </Button>

        <Button
          size="sm"
          w="4"
          colorScheme="gray.700"
          fontSize="xr"
          _hover={{
            bg: 'gray.500'
          }}
        >
          7
        </Button>
      </Stack>
    </Stack>
  );
}