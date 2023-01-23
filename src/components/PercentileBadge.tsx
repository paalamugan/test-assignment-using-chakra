import { percentageFormatter } from "@/utils/formatter";
import { Badge } from "@chakra-ui/react";
import { FC } from "react";

interface PercentileBadgeProps {
  percentage: number;
}
export const PercentileBadge: FC<PercentileBadgeProps> = ({ percentage }) => {
  return (
    <Badge bg={percentage > 0 ? "green.400" : "yellow.400"} borderRadius="md" px={2} size="sm" color="white">
      {percentage > 0 ? `+${percentageFormatter(percentage)}` : percentageFormatter(percentage)}
    </Badge>
  );
};
