import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { IProduct } from "../../product/types";
import { ICartItem } from "../type";
export interface ICartV2 {
  items: { [id: string]: number };
}
export interface ICartv1 {
  items: ICartItem[];
}
const initialState: ICartv1 = {
  items: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ICartItem | IProduct>) {
      let existProduct = state.items.some(
        (elem) => elem.id == action.payload.id
      );
      if (existProduct) {
        state.items = state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, count: item.count + 1 }
            : item
        );
      } else {
        state.items = [...state.items, { ...action.payload, count: 1 }];
      }
    },
    removeAllAnItemToCart(state, action: PayloadAction<ICartItem>) {
      state.items = state.items.filter((item) => item.id != action.payload.id);
    },
    removeAnItemToCart(state, action: PayloadAction<ICartItem>) {
      const itemProduct = state.items.find(
        (item) => item.id == action.payload.id
      );

      if (itemProduct?.count == 1) {
        state.items = state.items.filter(
          (item) => item.id != action.payload.id
        );
      } else {
        state.items = state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, count: item.count - 1 }
            : item
        );
      }
    },
  },
});
export const { addToCart, removeAnItemToCart, removeAllAnItemToCart } =
  cartSlice.actions;
export default cartSlice.reducer;
export const getMemoizeNumItems = createSelector(
  (state: RootState) => state.cart.items,
  (items) => {
    //para memorizar y no redireccionar
    return items.reduce((a, { count }) => a + count, 0);
  }
);
// export const getTotalPrice = (state: RootState) => {
//   return state.cart.items.reduce((a, { price, count }) => a + price * count, 0);
// };
export const getTotalPrice = createSelector(
  (state: RootState) => state.cart.items,
  (items) => {
    return items.reduce((a, { price, count }) => a + price * count, 0);
  }
);
// export const getMemoizeNumItems = createSelector(
//   (state: RootState) => state.cart.items,
//   (items) => {
//     //para memorizar y no redireccionar
//     return items.reduce((a, b) => a + b, 0);
//   }
// );
// export const getTotalPrice = createSelector(
//   (state: RootState) => state.cart.items,
//   (items) => {
//     //para memorizar y no redireccionar
//     return Object.values(items).reduce((a, b) => a + b, 0);
//   }
// );
// export const  getProducts = createSelector(
//   (state: RootState) => state.cart.items,
//   (items) => {
//     const products = await api.list();
//     return Object.values(items).reduce((a, b) => a + b, 0);
//   }
// );
