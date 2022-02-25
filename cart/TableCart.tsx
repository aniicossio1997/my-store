import {
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
import { MdDeleteForever } from "react-icons/md";
import { parseCurrency } from "../product/types";
import { ButtonGroupOption } from "./tableCart/ButtonGroupOption";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  getMemoizeNumItems,
  getTotalPrice,
  removeAllAnItemToCart,
} from "./redux/cartSlice";

interface IProps {}
const TableCart = ({}: IProps) => {
  const dispatch = useAppDispatch();
  const countItemsCart = useAppSelector(getMemoizeNumItems);
  const priceItemsCart = useAppSelector(getTotalPrice);
  const itemsCart = useAppSelector((store) => store.cart.items);
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
          {itemsCart.map((item) => (
            <Tr key={item.id}>
              <Td>
                <Image src={item.image} h={"40px"} objectFit={"scale-down"} />
                <b>{item.title}</b>
              </Td>
              <Td justifyContent={"center"}>
                <ButtonGroupOption product={item} />
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
                  onClick={() => dispatch(removeAllAnItemToCart(item))}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot my={10}>
          <Tr>
            <Th colSpan={4} fontSize={"medium"}>
              Count: {countItemsCart}
            </Th>
          </Tr>
          <Tr>
            <Th colSpan={4} fontSize={"medium"}>
              Total: {parseCurrency(priceItemsCart)}
            </Th>
          </Tr>
        </Tfoot>
      </Table>
    </>
  );
};

export default TableCart;
