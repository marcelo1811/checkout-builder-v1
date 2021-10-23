import { Box, Text } from "@chakra-ui/layout";
import { CardBlock } from "blocks/CardBlock";
import { RowBlock } from "blocks/RowBlock";
import { useState } from "react";

export function HomePage() {
  const [cards, setCards] = useState<any[]>([]);

  return (
    <Box
      height='100vh'
      width='100vw'
    >
      <Text>HomePage</Text>
      <RowBlock
        backgroundColor='transparent'
      >
        <CardBlock
          title='Teste'
          bgColor='white'
          description='Compre agora'
        />
      </RowBlock>
    </Box>
  )
}