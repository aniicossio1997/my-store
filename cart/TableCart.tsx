import {
  Box,
  Icon,
  IconButton,
  Image,
  Table,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { useCartContext } from "../context/cartContext";
import { MdDeleteForever } from "react-icons/md";
import { parseCurrency } from "../product/types";
import { ButtonGroupOption } from "./tableCart/ButtonGroupOption";

interface IProps {}
const TableCart = (props: IProps) => {
  const {
    cart,
    amountPriceCart,
    amountItemsCart,
    handleRemoveProductCart,
    hadlerRemoveAllProductCart,
    addProduct,
  } = useCartContext();

  return (
    <>
      <Table size="sm">
        <Thead width={"sm"}>
          <Tr>
            <Th>Product</Th>
            <Th>Count</Th>
            <Th colSpan={2}>Price</Th>
          </Tr>
        </Thead>
        <Tbody>
          {cart.map((item) => (
            <Tr key={item.id}>
              <Td>
                <Image src={item.image} h={"40px"} objectFit={"scale-down"} />
                <b>{item.title}</b>
              </Td>
              <Td justifyContent={"center"}>
                <ButtonGroupOption
                  handleRemoveProductCart={handleRemoveProductCart}
                  product={item}
                  addProduct={addProduct}
                />
              </Td>
              <Td align={"center"}>
                {item.count}X{parseCurrency(item.price)}
              </Td>
              <Td>
                <IconButton
                  colorScheme="red"
                  aria-label="Delete"
                  size={"sm"}
                  icon={<Icon h={6} w={6} as={MdDeleteForever} />}
                  onClick={() => hadlerRemoveAllProductCart(item)}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot my={10}>
          <Tr>
            <Th colSpan={4} fontSize={"medium"}>
              Count: {amountItemsCart()}
            </Th>
          </Tr>
          <Tr>
            <Th colSpan={4} fontSize={"medium"}>
              Total: {amountPriceCart()}
            </Th>
          </Tr>
        </Tfoot>
      </Table>
    </>
  );
};

export default TableCart;
