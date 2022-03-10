import { FormControl, FormLabel, Input as InputChakra, InputProps as ChakraInputProps } from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

  
export function Input({ name, label, ...rest }: InputProps) {
  return (
    <FormControl>
      {/* Só vou fazer a label aparecer se ela existir dentro do componente */}
      { !!label && <FormLabel htmlFor={name}>{label}</FormLabel> }

      <InputChakra
        name={name}
        id={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: 'gray.900'
        }}
        size="lg"
        {...rest}
      />
    </FormControl>
  );
}
