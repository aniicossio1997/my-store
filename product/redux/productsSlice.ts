import { createSlice } from "@reduxjs/toolkit";

export interface IProduct {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
  stock: number;
}
export interface ProductsState {
  products: { [id: string]: IProduct };
}
const initialState: ProductsState = {
  products: {
    "2": {
      id: "2",
      title: "pan",
      category: "pana",
      description: "lsls",
      image: "",
      price: 20,
      stock: 25,
    },
  },
};
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});
export default productsSlice.reducer;
