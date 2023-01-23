import { REVENUE_API_URL } from "@/constants/apis";
import { fetcher } from "@/utils/common";
import { Box, Card, Divider, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { FC } from "react";
import useSWR from "swr";
import { BarChart } from "../charts/BarChart";

const HeadingTitle = ({ title, value, color }: { title: string; value: number; color: string }) => {
  return (
    <HStack align="center">
      <Box borderRadius="full" height="13px" width="13px" border="4px" borderColor={color}></Box>
      <Heading as="h2" size="lg" fontWeight="600">
        {value}
      </Heading>
      <Text color="gray.500" fontSize="smaller">
        {title}
      </Text>
    </HStack>
  );
};

export const DirectVsIndirectCard: FC = () => {
  const { data, isLoading } = useSWR(REVENUE_API_URL, fetcher);

  if (isLoading) {
    return (
      <Card px={4} py={2} width="full">
        Loading...
      </Card>
    );
  }

  const revenue = data.data.revenue;
  const totalRevenue = data.data.totalRevenue;
  const labels = revenue.map((item: { month: string }) => item.month);
  const directValues = revenue.map((item: { direct: number }) => item.direct);
  const indirectValues = revenue.map((item: { indirect: number }) => item.indirect);

  const datasets = [
    {
      id: 1,
      label: "Direct",
      data: directValues,
      backgroundColor: "#6366F1",
    },
    {
      id: 2,
      label: "Indirect",
      data: indirectValues,
      backgroundColor: "#38BDF8",
    },
  ];

  return (
    <Card width="full">
      <Heading as="h2" size="sm" fontWeight="600" px={4} py={3}>
        Direct Vs Indirect
      </Heading>
      <Divider orientation="horizontal" color="gray.200" />
      <VStack justify="flex-start" align="flex-start" p={4}>
        <HStack gap={4}>
          <HeadingTitle title="Direct" value={totalRevenue.direct} color="#6366F1" />
          <HeadingTitle title="Indirect" value={totalRevenue.indirect} color="#38BDF8" />
        </HStack>
        <BarChart labels={labels} datasets={datasets} height="80px" />
      </VStack>
    </Card>
  );
};
