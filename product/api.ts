import axios from "axios";
import Papa from "papaparse";
import { IProduct } from "./redux/productsSlice";
export default {
  list: (): Promise<IProduct[]> => {
    const publicProducts = process.env.NEXT_PUBLIC_PRODUCTS || "";
    return axios
      .get(publicProducts, {
        responseType: "blob",
      })
      .then(
        (response) =>
          new Promise<IProduct[]>((resolve, reject) => {
            Papa.parse(response.data, {
              header: true,
              complete: (results) => {
                const products = results.data as IProduct[];
                return resolve(
                  products.map((product) => ({
                    ...product,
                    price: Number(product.price),
                  }))
                );
              },
              error: (error) => reject(error.message),
            });
          })
      );
  },
};
