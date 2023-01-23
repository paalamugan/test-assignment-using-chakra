import appConfig from "@/config/appConfig";
import { Box, Divider, Flex, FlexProps, HStack, IconButton, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { FiChevronDown, FiMenu } from "react-icons/fi";
import { HiExclamationCircle, HiOutlineSearch } from "react-icons/hi";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
export const Header = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      height="16"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
      px={{ base: 6 }}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Box display={{ base: "flex", md: "none" }}>
        <Image src={appConfig.logo} alt="logo" width={40} height={40} />
      </Box>

      <HStack spacing={{ base: "0", md: "3" }}>
        <HStack spacing="0">
          <IconButton size="md" variant="ghost" aria-label="search icon" icon={<HiOutlineSearch />} />
          <IconButton size="md" variant="ghost" aria-label="chat icon" icon={<HiOutlineChatBubbleLeftRight />} />
          <IconButton size="md" variant="ghost" aria-label="exclamation icon" icon={<HiExclamationCircle />} />
        </HStack>
        <Divider orientation="vertical" height="6" />
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: "none" }}>
              <HStack>
                <VStack display={{ base: "none", md: "flex" }} alignItems="flex-start" spacing="1px" ml="2">
                  <Text fontSize="sm">{appConfig.user.name}</Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};