import { StyleFunctionProps, mode } from "@chakra-ui/theme-tools";

import { roboto } from '@/fonts/roboto';

export const globalStyles = {
  colors: {
    gray: {
      700: "#1f2733",
    },
    navy: {
      50: "#d0dcfb",
      100: "#aac0fe",
      200: "#a3b9f8",
      300: "#728fea",
      400: "#3652ba",
      500: "#1b3bbb",
      600: "#24388a",
      700: "#1b254b",
      800: "#111c44",
      900: "#0b1437",
    },
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        // overflowX: "hidden",
        bg: mode("gray.50", "#1B254B")(props),
        fontFamily: roboto.style.fontFamily,
      },
      html: {
        fontFamily: roboto.style.fontFamily,
      },
    }),
  },
};