import React from "react";
import PropTypes from "prop-types";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { BtnOption } from "./BtnOption";
import { ICartItem } from "../type";
import { useAppDispatch } from "../../app/hooks";
import { addToCart, removeAnItemToCart } from "../redux/cartSlice";

interface IProps {
  product: ICartItem;
  [rest: string]: any;
}

export const ButtonGroupOption = ({ product, ...rest }: IProps) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <ButtonGroup size="sm" isAttached>
        <BtnOption
          // handleProductCart={handleRemoveProductCart}
          product={product}
          typeBtn="-"
          colorScheme={"red"}
          evenonclick={() => dispatch(removeAnItemToCart(product))}
        />
        <Button mr="-px" cursor={"pointer"}>
          {product.count}
        </Button>
        <BtnOption
          // handleProductCart={addProduct}
          product={product}
          typeBtn="+"
          colorScheme={"blue"}
          evenonclick={() => dispatch(addToCart(product))}
        />
      </ButtonGroup>
    </>
  );
};
