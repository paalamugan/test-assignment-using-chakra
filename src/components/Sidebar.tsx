import React, { FC } from "react";
import {
  Box,
  useColorModeValue,
  Drawer,
  DrawerContent,
} from "@chakra-ui/react";
import { SidebarContent } from "./SidebarContent";

interface SidebarProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const Sidebar: FC<SidebarProps> = ({ isOpen, onOpen, onClose }) => {
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
    </Box>
  );
};
