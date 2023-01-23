import { ORDER_VALUE_API_URL, REVENUE_API_URL } from "@/constants/apis";
import { fetcher } from "@/utils/common";
import { numberFormatter, percentageFormatter } from "@/utils/formatter";
import { Badge, Box, Card, Divider, Heading, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import { FC } from "react";
import useSWR from "swr";
import { AreaChart } from "../charts/AreaChart";
import { PercentileBadge } from "../PercentileBadge";

export const AvgOrderValueCard: FC = () => {
  const { data, isLoading } = useSWR(ORDER_VALUE_API_URL, fetcher);

  if (isLoading) {
    return (
      <Card px={4} py={2} width="full">
        Loading...
      </Card>
    );
  }

  const { total, values } = data.data;
  const datasets = [
    {
      id: 1,
      label: "Avg Order Value",
      data: values,
      borderColor: "#6366F1",
      backgroundColor: "#CBD5E1",
    },
  ];
  return (
    <Card width="full">
      <Heading as="h2" size="sm" fontWeight="600" px={4} py={3}>
        Avg Order Value
      </Heading>
      <Divider orientation="horizontal" color="gray.200" />
      <VStack justify="flex-start" align="flex-start" gap="3" p={4}>
        <HStack gap={4} justify="space-between" width="full">
          <HStack align="center" gap={6}>
            <Heading as="h2" size="lg" fontWeight="600">
              {numberFormatter(total)}
            </Heading>
            <PercentileBadge percentage={total / 100} />
          </HStack>
          <Stack direction="row">
            <HStack gap={1} align="center">
              <Box borderRadius="full" height="13px" width="13px" border="4px" borderColor={"#6366F1"}></Box>
              <Text color="gray.600" fontSize="sm">
                Current
              </Text>
            </HStack>
            <HStack gap={1} align="center">
              <Box borderRadius="full" height="13px" width="13px" border="4px" borderColor={"#CBD5E1"}></Box>
              <Text color="gray.600" fontSize="sm">
                Previous
              </Text>
            </HStack>
          </Stack>
        </HStack>
        <AreaChart labels={values} datasets={datasets} height="80px" showXAxisLabel showYAxisLabel />
      </VStack>
    </Card>
  );
};
