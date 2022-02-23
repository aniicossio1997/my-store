import { Flex, Image } from "@chakra-ui/react";
import React from "react";

const NotFound = () => {
  return (
    <Flex justifyContent={"center"}>
      <Image
        src={"/Error.svg"}
        alt="not found"
        maxHeight={"500px"}
        borderColor={"gray.600"}
        borderWidth={1}
      />
    </Flex>
  );
};

export default NotFound;
