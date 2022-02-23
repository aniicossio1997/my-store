import { useState } from "react";
import { Product } from "../product/types";
import { ICartItem } from "./type";
function parseCurrency(value: number): string {
  return value.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
  });
}
const useCart = () => {
  const [cart, setCart] = useState<ICartItem[]>([]);
  const addProduct = (product: Product | ICartItem): void => {
    let existProduct = cart.some((elem) => elem.id == product.id);
    if (existProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, count: 1 }]);
    }
  };
  const handleRemoveProductCart = (product: ICartItem): void => {
    const itemProduct = cart.find((item) => item.id == product.id);

    if (itemProduct?.count == 1) {
      setCart(cart.filter((item) => item.id != product.id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, count: item.count - 1 } : item
        )
      );
    }
  };
  const hadlerRemoveAllProductCart = (product: ICartItem): void => {
    setCart(cart.filter((item) => item.id != product.id));
  };
  const amountItemsCart = () => {
    return cart.reduce((a, { count }) => a + count, 0);
  };
  const amountPriceCart = () => {
    return parseCurrency(
      cart.reduce((a, { price, count }) => a + price * count, 0)
    );
  };
  return {
    cart,
    addProduct,
    amountItemsCart,
    amountPriceCart,
    handleRemoveProductCart,
    hadlerRemoveAllProductCart,
  };
};

export default useCart;
