import { Flex, FlexProps, Link, Icon } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { IconType } from "react-icons";

interface NavItemProps extends FlexProps {
    icon: IconType;
    isActive?: boolean;
    children: ReactNode;
  }
  export const NavItem = ({ icon, children, isActive, ...rest }: NavItemProps) => {
    return (
      <Link href="#" style={{ textDecoration: "none" }} _focus={{ boxShadow: "none" }}>
        <Flex
          align="center"
          p="3"
          mx="4"
          role="group"
          cursor="pointer"
          fontSize="sm"
          borderRadius="sm"
          bg={isActive ? "gray.900" : "inherit"}
          color={isActive ? "white" : "white"}
          _hover={{
            bg: "gray.900",
            color: "white",
          }}
          {...rest}
        >
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: "white",
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </Link>
    );
  };