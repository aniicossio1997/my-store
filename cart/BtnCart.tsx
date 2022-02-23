import React from "react";
import { Button, Flex, Link } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

interface IProps {
  amountItemsCart: () => string | number;
  onOpen: (() => void) | undefined;
}
const BtnCart = ({ amountItemsCart, onOpen }: IProps) => {
  return (
    <>
      <AnimatePresence>
        {amountItemsCart() > 0 && (
          <Flex
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            bottom={0}
            position={"sticky"}
            padding={4}
            alignItems={"center"}
            justifyContent={"center"}
            as={motion.div}
          >
            <Button
              padding={4}
              colorScheme={"whatsapp"}
              width={"fit-content"}
              margin={"auto"}
              onClick={onOpen}
            >
              Ver Carrito ({amountItemsCart()} productos)
            </Button>
          </Flex>
        )}
      </AnimatePresence>
    </>
  );
};

export default BtnCart;
