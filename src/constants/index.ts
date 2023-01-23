import { IconType } from "react-icons";
import { FiHome } from "react-icons/fi";
import { RiArrowUpDownFill } from "react-icons/ri";

interface LinkItemProps {
  name: string;
  icon: IconType;
  path: string;
}
export const LinkItems: Array<LinkItemProps> = [
  { name: "Dashboard", icon: FiHome, path: "/dashboard" },
  { name: "Customers", icon: RiArrowUpDownFill, path: "/customers" },
];

export const avatarLists = [
  {
    name: "Name 1",
    src: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
  },
  {
    name: "Name 2",
    src: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
  },
  {
    name: "Name 3",
    src: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
  },
  {
    name: "Name 4",
    src: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
  },
  {
    name: "Name 5",
    src: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
  },
] as const