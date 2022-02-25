import type { GetStaticProps } from "next";
import { Stack, SimpleGrid, Alert, AlertIcon } from "@chakra-ui/react";
import { Product } from "../product/types";
import React from "react";
import api from "../product/api";
import ItemProduct from "../product/ItemProduct";
import { useCartContext } from "../context/cartContext";
import BtnCart from "../cart/BtnCart";
import { AnimateSharedLayout } from "framer-motion";
import InputSearch from "../components/inputsearch";
import useProductFilter from "../product/useProductFilter";
import { useAppSelector } from "../app/hooks";
import { getMemoizeNumItems } from "../cart/redux/cartSlice";
interface Props {
  products: Product[];
}

const IndexRoute: React.FC<Props> = ({ products }) => {
  const { onOpen } = useCartContext();
  const { handleSearchChange, search, filterProducts } =
    useProductFilter(products);
  const numItemsCart = useAppSelector(getMemoizeNumItems);

  return (
    <>
      <AnimateSharedLayout>
        <Stack spacing={6}>
          <InputSearch
            handleSearchChange={handleSearchChange}
            search={search}
          />
          {filterProducts().length < 1 && (
            <Alert status="error" variant="left-accent">
              <AlertIcon />
              No se encontraron coicidencias, intente nuevamente
            </Alert>
          )}
          <SimpleGrid gridGap={6} columns={{ base: 1, sm: 2, md: 3, lg: 4 }}>
            {filterProducts().map((product) => (
              <ItemProduct key={product.id} product={product} />
            ))}
          </SimpleGrid>
          <BtnCart amountItemsCart={numItemsCart} onOpen={onOpen} />
        </Stack>
      </AnimateSharedLayout>
    </>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const products = await api.list();
  return {
    revalidate: 10,
    props: {
      products,
    },
  };
};

export default IndexRoute;
