import { Icon, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React from "react";
import { BiSearch } from "react-icons/bi";

interface IProps {
  handleSearchChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  search: string;
}
const index = ({ handleSearchChange, search }: IProps) => {
  return (
    <>
      <InputGroup
        size="md"
        variant="outline"
        borderColor={"gray"}
        placeholder="Buscar..."
        backgroundColor={"white"}
      >
        <Input
          placeholder="Buscar..."
          focusBorderColor="pink.400"
          onChange={handleSearchChange}
          value={search}
        />
        <InputRightElement children={<Icon as={BiSearch} h={6} w={6} />} />
      </InputGroup>
    </>
  );
};

export default index;
