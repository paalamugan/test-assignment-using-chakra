import React, { ReactNode } from "react";
import { Box, useColorModeValue, Drawer, DrawerContent, useDisclosure } from "@chakra-ui/react";
import { Header } from "./Header";
import { SidebarContent } from "./SidebarContent";

export const SidebarWithHeader = ({ children }: { children?: ReactNode }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent onClose={() => onClose} display={{ base: "none", md: "block" }} />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <Header onOpen={onOpen} ml={{ base: 0, md: 60 }} px={{ base: 4, md: 4 }} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
};
