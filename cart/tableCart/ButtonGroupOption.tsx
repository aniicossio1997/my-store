import React from "react";
import PropTypes from "prop-types";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { BtnOption } from "./BtnOption";
import { ICartItem } from "../type";
import { Product } from "../../product/types";
interface IProps {
  handleRemoveProductCart?: (product: ICartItem) => void;
  addProduct?: (product: ICartItem) => void;
  product: ICartItem;
}
export const ButtonGroupOption = ({
  handleRemoveProductCart,
  product,
  addProduct,
}: IProps) => {
  return (
    <>
      <ButtonGroup size="sm" isAttached>
        <BtnOption
          handleProductCart={handleRemoveProductCart}
          product={product}
          typeBtn="-"
          colorScheme={"red"}
        />
        <Button mr="-px" cursor={"pointer"}>
          {product.count}
        </Button>
        <BtnOption
          handleProductCart={addProduct}
          product={product}
          typeBtn="+"
          colorScheme={"blue"}
        />
      </ButtonGroup>
    </>
  );
};
