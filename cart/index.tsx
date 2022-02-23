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

const index = () => {
  const btnRef = useRef(null);
  const { amountItemsCart, amountPriceCart, onOpen, isOpen, onClose, cart } =
    useCartContext();

  const text = React.useMemo(
    () =>
      cart
        .reduce(
          (message, product) =>
            message.concat(
              `* ${product.title} ${parseCurrency(product.price)} cantidad: ${
                product.count
              }\n`
            ),
          ``
        )
        .concat(`\nTotal: ${amountPriceCart()}`),
    [cart]
  );
  return (
    <>
      <IconCart
        btnRef={btnRef}
        amountItemsCart={amountItemsCart}
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
