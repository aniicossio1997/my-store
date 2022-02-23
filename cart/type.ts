import { Product } from "../product/types";

export interface ICartItem extends Product {
  count: number;
}
