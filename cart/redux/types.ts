import { Product } from "../../product/types";
import { ICartItem } from "../type";
export const ADD_TO_CART = "ADD_TO_CART";

export const REMOVE_TO_CART = "REMOVE_TO_CART";
export const REMOVE_TO_ALL_ITEM_CART = "REMOVE_TO_ALL_ITEM_CART";

export const UPDATE_AMOUNT = "UPDATE_AMOUNT";
export interface ICartState {
  products: ICartItem[];
}

interface AddToCartAction {
  type: typeof ADD_TO_CART;
  payload: Product;
}

interface RemoveToCart {
  type: typeof REMOVE_TO_CART;
  payload: ICartItem;
}
interface RemoveToAllItemCart {
  type: typeof REMOVE_TO_ALL_ITEM_CART;
  payload: ICartItem;
}

interface UpdateCartProductAmount {
  type: typeof UPDATE_AMOUNT;
  id: number;
  amount: number;
}

export type CartActionTypes =
  | AddToCartAction
  | RemoveToCart
  | UpdateCartProductAmount
  | RemoveToAllItemCart;
