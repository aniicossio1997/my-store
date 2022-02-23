import { type } from "os";
import { Product } from "../../product/types";
import { ICartItem } from "../type";
const initialState: ICartItem[] = [];
//actions
type ActionType =
  | { type: "addProductToCart"; payload: ICartItem | Product }
  | { type: "removeProductToCart"; payload: ICartItem }
  | { type: "removeAllAnItemToCart"; payload: ICartItem };
const cartReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case "addProductToCart":
      return [...state, action.payload];

    default:
      return state;
  }
};
