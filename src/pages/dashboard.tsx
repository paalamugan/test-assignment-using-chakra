import appConfig from "@/config/appConfig";
import MainLayout from "@/layouts/MainLayout";
import {
  Avatar,
  AvatarGroup,
  Card,
  Grid,
  GridItem,
  Heading,
  HStack,
  IconButton,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";
import { avatarLists } from "@/constants";
import { DirectVsIndirectCard } from "@/components/cards/DirectVsIndirectCard";
import { AvgOrderValueCard } from "@/components/cards/AvgOrderValueCard";
import { SaleCardChartContainer } from "@/components/SaleCardChartContainer";

export default function Dashboard() {

  return (
    <MainLayout metaTitle="Dashboard">
      <Stack m={3} gap={4}>
        <Card p={6} bg="#C7D2FE">
          <VStack gap={1} alignItems="flex-start">
            <Heading as="h4" size="md" fontWeight="500">
              Good afternoon, {appConfig.user.name}
            </Heading>
            <Text fontSize="sm" color="gray.600">
              Here is what&apos;s happening today
            </Text>
          </VStack>
        </Card>
        <Stack justify="space-between" direction="row">
          <AvatarGroup size="sm" max={4}>
            {avatarLists.map((avatar) => (
              <Avatar key={avatar.name} name={avatar.name} src={avatar.src} />
            ))}
          </AvatarGroup>
          <HStack>
            <Card>
              <IconButton size="sm" variant="ghost" aria-label="search icon" icon={<BsFilter />} />
            </Card>
            <Card>
              <HStack>
                <IconButton size="sm" variant="ghost" aria-label="search icon" icon={<AiOutlineCalendar />} />
                <Text pr={3} fontSize="sm">
                  Oct 15, 2022&nbsp;&nbsp;Oct 31, 2022
                </Text>
              </HStack>
            </Card>
          </HStack>
        </Stack>
        <SaleCardChartContainer />
        <Grid templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }} gap={6}>
          <GridItem>
            <DirectVsIndirectCard />
          </GridItem>
          <GridItem>
            <AvgOrderValueCard />
          </GridItem>
        </Grid>
      </Stack>
    </MainLayout>
  );
}
