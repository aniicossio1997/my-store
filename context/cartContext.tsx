import React, { useContext } from "react";
import useCart from "../cart/useCart";
import { ICartItem } from "../cart/type";
import { Product } from "../product/types";
import { useDisclosure } from "@chakra-ui/react";

type Amount = () => number | string;
interface AppContextInterface {
  cart: ICartItem[];
  addProduct?: (product: Product) => void;
  amountItemsCart: Amount;
  amountPriceCart: Amount;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  handleRemoveProductCart?: (product: ICartItem) => void;
  hadlerRemoveAllProductCart?: (product: ICartItem) => void;
}

export const CartContext = React.createContext<AppContextInterface>({
  cart: [],
  amountPriceCart: () => 0,
  amountItemsCart: () => 0,
  isOpen: false,
});

const CartProvider: React.FC = (props) => {
  const {
    cart,
    addProduct,
    amountItemsCart,
    amountPriceCart,
    handleRemoveProductCart,
    hadlerRemoveAllProductCart,
  } = useCart();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        amountItemsCart,
        amountPriceCart,
        onClose,
        isOpen,
        onOpen,
        handleRemoveProductCart,
        hadlerRemoveAllProductCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
export const useCartContext = () => {
  return useContext(CartContext);
};
