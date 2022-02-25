import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import React from "react";
import theme from "../styles/theme";
import Layout from "../components/layout";
import type { AppProps /*, AppContext */ } from "next/app";
import CartProvider from "../context/cartContext";
import { store } from "../app/store";
import { Provider } from "react-redux";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  store;
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Provider store={store}>
        <CartProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CartProvider>
      </Provider>
    </ChakraProvider>
  );
};
export default App;
