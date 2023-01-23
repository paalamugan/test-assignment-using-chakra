import appConfig from "@/config/appConfig";
import { LinkItems } from "@/constants";
import { Box, BoxProps, CloseButton, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { NavItem } from "./NavItem";

interface SidebarProps extends BoxProps {
    onClose: () => void;
  }
  
 export const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const router = useRouter();

    return (
      <Box
        transition="3s ease"
        bg={"gray.700"}
        borderRight="1px"
        borderRightColor={useColorModeValue("gray.200", "gray.700")}
        w={{ base: "full", md: 60 }}
        pos="fixed"
        h="full"
        {...rest}
      >
        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
          <Image src={appConfig.logo} alt="logo" width={40} height={40} />
          <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
        </Flex>
        <Text color={"gray.400"} p={4} fontSize={"sm"}>Pages</Text>
        {LinkItems.map((link) => (
          <NavItem key={link.name} icon={link.icon} isActive={router.pathname.includes(link.path)}>
            {link.name}
          </NavItem>
        ))}
      </Box>
    );
  };