import { Button } from "@chakra-ui/react";

interface PaginationProps {
  isCurrent?: boolean;
  pageNumber: number;
}

export function PaginationItem({ isCurrent = false, pageNumber }: PaginationProps) {
  if (isCurrent) {
    return (
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
        {pageNumber}
      </Button>
    )
  }
  
  return (
    <Button
      size="sm"
      w="4"
      colorScheme="gray.700"
      fontSize="xr"
      _hover={{
        bg: 'gray.500'
      }}
    >
      {pageNumber}
    </Button>
  );
}