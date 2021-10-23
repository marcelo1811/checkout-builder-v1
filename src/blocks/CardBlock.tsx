import { Box, Text } from "@chakra-ui/layout";

interface ICardBlockProps {
  title: string;
  description?: string;
}

export function CardBlock({ title, description }: ICardBlockProps) {
  return (
    <Box>
      <Text>{title}</Text>
      {!!description && <Text>{description}</Text>}
    </Box>
  )
}