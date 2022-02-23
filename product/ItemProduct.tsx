import { Button, Flex, Image, Stack, Tag, Text } from "@chakra-ui/react";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import React, { useState } from "react";
import { Product } from "./types";

function parseCurrency(value: number): string {
  return value.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
  });
}
interface Props {
  product: Product;
  addProduct: (product: Product) => void;
}

const ItemProduct = ({ product, addProduct }: Props) => {
  const [selectedImg, setSelectImg] = useState<string | null>(null);

  return (
    <>
      <AnimateSharedLayout type={"crossfade"}>
        <Stack
          backgroundColor={"whiteAlpha.600"}
          height={"380px"}
          key={product.id}
          spacing={6}
          rounded={15}
          padding={4}
          borderWidth={"2px"}
        >
          <Image
            alt={product.title}
            src={product.image}
            maxHeight={120}
            objectFit={"cover"}
            borderTopRadius={"md"}
            as={motion.img}
            cursor={"pointer"}
            layoutId={product.image}
            onClick={() => setSelectImg(product.image)}
          />
          {product.image}
          <Text
            color={"gray.500"}
            textAlign={"center"}
            fontSize="2xl"
            fontWeight="900"
          >
            {parseCurrency(product.price)}
          </Text>
          <Text>{product.title}</Text>
          <Text>
            <Tag borderRadius="full" size={"sm"} variant="solid">
              {product.category}
            </Tag>
          </Text>

          <Button
            isDisabled={product.stock <= 0 && true}
            onClick={() => addProduct(product)}
            variant={"outline"}
            colorScheme={"blue"}
          >
            Agregar +
          </Button>
        </Stack>
        <AnimatePresence>
          {selectedImg && (
            <Flex
              key={"backdrop"}
              alignItems={"center"}
              as={motion.div}
              bgColor={"rgba(0,0,0,0.5)"}
              justifyContent={"center"}
              layoutId={selectedImg}
              position={"fixed"}
              top={0}
              left={0}
              height={"100%"}
              width={"100%"}
              zIndex={99}
              onClick={() => setSelectImg(null)}
            >
              <Image key={"image"} src={selectedImg} />
            </Flex>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </>
  );
};

export default ItemProduct;
