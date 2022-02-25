import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Icon,
  Link,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { useCartContext } from "../context/cartContext";
import TableCart from "./TableCart";
import { parseCurrency } from "../product/types";
import IconCart from "./IconCart";
import { FaWhatsapp } from "react-icons/fa";
import { getMemoizeNumItems, getTotalPrice } from "./redux/cartSlice";
import { useAppSelector } from "../app/hooks";

const index = () => {
  const btnRef = useRef(null);
  const { onOpen, isOpen, onClose, cart } = useCartContext();
  const priceItemsCart = useAppSelector(getTotalPrice);
  const itemsCart = useAppSelector((store) => store.cart.items);
  const text = React.useMemo(() => {
    return itemsCart
      .reduce(
        (message, product) =>
          message.concat(
            `* ${product.title} ${parseCurrency(product.price)} cantidad: ${
              product.count
            }\n`
          ),
        ``
      )
      .concat(`\nTotal: ${parseCurrency(priceItemsCart)}`);
  }, [itemsCart]);
  const numItemsCart = useAppSelector(getMemoizeNumItems);

  return (
    <>
      <IconCart
        btnRef={btnRef}
        amountItemsCart={numItemsCart}
        onOpen={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"md"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Mi Pedido</DrawerHeader>

          <DrawerBody padding={0} margin={0}>
            <TableCart />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="solid" mr={3} onClick={onClose}>
              Seguir comprando
            </Button>
            <Button
              colorScheme="whatsapp"
              isExternal
              href={`https://wa.me/21111999?text=${encodeURIComponent(text)}`}
              as={Link}
              leftIcon={<Icon h={8} w={8} as={FaWhatsapp} />}
            >
              Realizar Pedido
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default index;
