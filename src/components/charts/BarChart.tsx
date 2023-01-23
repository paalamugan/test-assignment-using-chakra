

import type { FC } from "react";
import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartData } from "chart.js";
import { Bar } from "react-chartjs-2";
import { Box } from "@chakra-ui/react";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};


interface BarChartProps {
  labels: string[];
  datasets: ChartData<"bar">["datasets"];
  height?: number | string;
  redraw?: boolean;

}
export const BarChart: FC<BarChartProps> = ({ labels, datasets, height, redraw }) => {
  return (
    <Box width="full">
      <Bar
        options={options}
        data={{
          labels,
          datasets,
        }}
        height={height}
        redraw={redraw}
      />
    </Box>
  );
};
