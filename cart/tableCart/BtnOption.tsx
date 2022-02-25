import { Button } from "@chakra-ui/react";
import { Action, AnyAction } from "@reduxjs/toolkit";
import React, { MouseEvent } from "react";
import { IProduct, Product } from "../../product/types";
import { ICartItem } from "../type";
export interface IDispatch<A extends Action = AnyAction> {
  <T extends A>(action: T): T;
}
interface IFuntionParams {
  [propName: string]: (product: ICartItem) => void;
}
interface IProps {
  product: Product | ICartItem;
  typeBtn: string;
  colorScheme: string;
  evenonclick: React.MouseEventHandler<HTMLButtonElement>;
}
export const BtnOption = ({
  product,
  typeBtn,
  colorScheme = "gray",
  evenonclick,
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
        onClick={evenonclick}
        // onClick={() => handleProductCart(product)}
      >
        {typeBtn}
      </Button>
    </>
  );
};
