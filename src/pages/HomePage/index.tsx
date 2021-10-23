import { Box, Text } from "@chakra-ui/layout";
import { RowBlock } from "blocks/RowBlock";
import { useState } from "react";

export function HomePage() {
  const [cards, setCards] = useState<any[]>([]);

  return (
    <Box
      bg='red'
      height='100vh'
      width='100vw'
    >
      <Text>HomePage</Text>
      <RowBlock
        backgroundColor='green'
      >
        <Text>oi</Text>
      </RowBlock>
    </Box>
  )
}