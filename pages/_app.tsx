import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import React from "react";
import theme from "../styles/theme";
import Layout from "../components/layout";
import type { AppProps /*, AppContext */ } from "next/app";
import CartProvider from "../context/cartContext";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </ChakraProvider>
  );
};
export default App;
