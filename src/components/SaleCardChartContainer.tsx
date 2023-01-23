import { SALES_API_URL } from "@/constants/apis";
import { fetcher } from "@/utils/common";
import { Grid, GridItem } from "@chakra-ui/react";
import { FC } from "react";
import useSWR from "swr";
import { SaleCardChart } from "./cards/SaleCardChart";

export const SaleCardChartContainer: FC = () => {
  const { data, isLoading } = useSWR(SALES_API_URL, fetcher);

  return (
    <Grid templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }} gap={6}>
      <GridItem>{isLoading ? "Loading..." : <SaleCardChart data={data.data.customers} iconColor="#7A81F1" />}</GridItem>
      <GridItem>{isLoading ? "Loading..." : <SaleCardChart data={data.data.key_accounts} iconColor="#5DC5F5" />}</GridItem>
      <GridItem>{isLoading ? "Loading..." : <SaleCardChart data={data.data.retailers} iconColor="#2C2C2C" />}</GridItem>
    </Grid>
  );
};
