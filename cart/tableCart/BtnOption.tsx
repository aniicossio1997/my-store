import { Button } from "@chakra-ui/react";
import React from "react";
import { Product } from "../../product/types";
import { ICartItem } from "../type";

interface IProps {
  handleProductCart?: (product: ICartItem) => void;
  product: Product | ICartItem;
  typeBtn: string;
  colorScheme: string;
}
export const BtnOption = ({
  handleProductCart,
  product,
  typeBtn,
  colorScheme = "gray",
}: IProps) => {
  return (
    <>
      <Button
        mr="-px"
        colorScheme={colorScheme}
        variant={"solid"}
        aria-label="Options"
        size={"sm"}
        fontSize={"25px"}
        onClick={() => handleProductCart(product)}
      >
        {typeBtn}
      </Button>
    </>
  );
};
