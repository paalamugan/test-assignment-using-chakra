import { totalSum } from "@/utils/common";
import { currencyFormatter, percentageFormatter } from "@/utils/formatter";
import { Badge, Card, Heading, HStack, IconButton, Stack, Text } from "@chakra-ui/react";
import { FC } from "react";
import { BsThreeDots } from "react-icons/bs";
import { TiLocationArrow } from "react-icons/ti";
import { AreaChart } from "../charts/AreaChart";
import { PercentileBadge } from "../PercentileBadge";

interface SaleCardChartProps {
  iconColor: string;
  data: {
    currentWeek: number[];
    currentWeekTotal: number;
    lastWeek: number[];
    title: string;
  };
}

export const SaleCardChart: FC<SaleCardChartProps> = ({ data, iconColor }) => {
  const labels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const datasets = [
    {
      id: 1,
      label: "Current Week",
      data: data.currentWeek,
      borderColor: "#8D91F5",
      backgroundColor: "#EAF0FC"
    },
    {
      id: 2,
      label: "Last Week",
      data: data.lastWeek,
      borderColor: "#8D91F5",
      backgroundColor: "#EAF0FC"
    },
  ];

  const currentWeekTotal = data.currentWeekTotal;
  const lastWeekTotal = totalSum(data.lastWeek);
  const percentage = (currentWeekTotal - lastWeekTotal) / currentWeekTotal;

  return (
    <Card px={4} py={2}>
      <HStack justify="space-between">
        <TiLocationArrow fontSize={60} color={iconColor} style={{ rotate: "45deg" }} />
        <IconButton size="md" variant="ghost" aria-label="three dots icon" icon={<BsThreeDots />} />
      </HStack>
      <Stack ml="3">
        <Heading as="h2" size="md" fontWeight="500" mb={3}>
          {data.title}
        </Heading>
        <Text color="gray.500" fontSize="smaller">
          SALES
        </Text>
        <HStack mb={4} gap={5}>
          <Heading as="h2" size="md" fontWeight="600">
            {currencyFormatter(currentWeekTotal)}
          </Heading>
          <PercentileBadge percentage={percentage} />
        </HStack>
        <AreaChart labels={labels} datasets={datasets} height={"80px"} />
      </Stack>
    </Card>
  );
};
