import { Stack, Text } from '@chakra-ui/react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Stack py={5} justify="center" align="center">
      <Text fontWeight={'500'} fontSize={'md'}>
        © {currentYear} Assignment Project. All rights reserved
      </Text>
    </Stack>
  );
}