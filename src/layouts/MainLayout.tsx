import { Grid, GridItem, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import type { ReactNode } from "react";

import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";

import MetaTemplate from "@/templates/MetaTemplate";

type IMainLayoutProps = {
  metaTitle?: string;
  metaDescription?: string;
  children: ReactNode;
};

const MainLayout = ({ metaTitle, metaDescription, children }: IMainLayoutProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <MetaTemplate title={metaTitle} description={metaDescription}>
      <Grid
        templateAreas={{
          base: `
            "header header"
            "main main"
            "footer footer"
          `,
          md: `
            "sidebar header"
            "sidebar main"
            "sidebar footer"
          `,
        }}
        gridTemplateRows={"auto 1fr auto"}
        gridTemplateColumns={"240px 1fr"}
        minH="100vh"
      >
        <GridItem area={"sidebar"} as="aside" >
          <Sidebar isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        </GridItem>
        <GridItem area={"header"} as="header">
          <Container bg={useColorModeValue("gray.100", "gray.900")} color={useColorModeValue("gray.700", "gray.200")}>
            <Header onOpen={onOpen} />
          </Container>
        </GridItem>
        <GridItem
          area={"main"}
          as="main"
          bg={useColorModeValue("gray.100", "gray.900")}
          color={useColorModeValue("gray.700", "gray.200")}
        >
          <Container>{children}</Container>
        </GridItem>
        <GridItem area={"footer"} as="footer">
          <Container bg={useColorModeValue("gray.100", "gray.900")} color={useColorModeValue("gray.700", "gray.200")}>
            <Footer />
          </Container>
        </GridItem>
      </Grid>
    </MetaTemplate>
  );
};

export default MainLayout;
