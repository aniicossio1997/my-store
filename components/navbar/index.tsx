import React from "react";
import PropTypes from "prop-types";
import { Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import Cart from "../../cart";

interface Props {}
const index = (props: Props) => {
  return (
    <>
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <Cart />
      </Stack>
    </>
  );
};

export default index;
