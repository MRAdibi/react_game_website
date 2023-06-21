import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: "#edf2fc",
      100: "#d4d8e0",
      200: "#b9bec6",
      300: "#9ea4ae",
      400: "#838a96",
      500: "#68707c",
      600: "#515761",
      700: "#393e46",
      800: "#21252c",
      900: "#070c15",
    },
  },
});

export default theme;
