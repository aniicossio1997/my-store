// 1. Import the extendTheme function
import { extendTheme, theme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

export default extendTheme({
  config,
  styles: {
    global: (props: any) => ({
      "html, body, #root": {
        color: mode("gray.600", "white")(props),
        height: "100%",
        margin: 0,
      },
      "*::-webkit-scrollbar": {
        display: "none",
      },
    }),
  },
  colors: {
    brand: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
    primary: theme.colors.twitter,
  },
});
