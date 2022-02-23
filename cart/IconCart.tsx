import { Button, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { BiCartAlt } from "react-icons/bi";
interface IProps {
  btnRef: React.MutableRefObject<null>;
  amountItemsCart: () => string | number;
  onOpen: (() => void) | undefined;
}
const IconCart = ({ btnRef, amountItemsCart, onOpen }: IProps) => {
  return (
    <>
      <Button
        aria-label="Search database"
        ref={btnRef}
        onClick={onOpen}
        rounded={"full"}
        paddingTop={4}
      >
        <Text
          display={"block"}
          position={"absolute"}
          top={0}
          left={0}
          right={0}
          borderRadius="full"
          color={"green.500"}
        >
          {amountItemsCart()}
        </Text>
        <Icon display={"block"} w={7} h={7} as={BiCartAlt} />
      </Button>
    </>
  );
};

export default IconCart;
