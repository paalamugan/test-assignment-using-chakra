import { extendTheme } from "@chakra-ui/react";
import { globalStyles } from "./styles";
import { breakpoints } from "./foundations/breakpoints";
import { linkStyles } from "./components/link";
import { buttonStyles } from "./components/button";
import { CardComponent } from "./additions/card/Card";
import { PanelContainerComponent } from "./additions/layout/PanelContainer";
import { roboto } from "@/fonts/roboto";

const theme = extendTheme(
  {
    fonts: {
      heading: roboto.style.fontFamily,
    },
    config: {
      cssVarPrefix: "app",
      initialColorMode: "light",
    },
    breakpoints,
  },
  globalStyles,
  buttonStyles,
  linkStyles,
  CardComponent,
  PanelContainerComponent
);

export default theme;
