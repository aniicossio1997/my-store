export interface Product {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
  stock: number;
}
export interface IProduct {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
  stock: number;
}
type Currency = "CLP" | "USD" | "JPY";

type Price = {
  price: number;
  locale?: string;
  currency?: Currency;
};

export const currencyFormatter = ({
  price,
  locale = "en-US",
  currency = "USD",
}: Price): string => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(price);
};
export function parseCurrency(value: number): string {
  return value.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
  });
}
