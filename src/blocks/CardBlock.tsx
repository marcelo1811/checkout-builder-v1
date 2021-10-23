import { Box, Text } from "@chakra-ui/layout";

interface ICardBlockProps {
  title: string;
  description?: string;
  bgColor?: string;
  containerStyles?: any;
  fontColor?: string;
}

export function CardBlock({ title, description, bgColor, containerStyles, fontColor }: ICardBlockProps) {
  return (
    <Box
      bg={bgColor}
      display='flex'
      flexDirection='column'
      padding='15px'
      style={containerStyles}
      borderRadius='5px'
      justifyContent='center'
      alignItems='center'
      minWidth='250px'
      maxWidth='360px'
      width='280px'
    >
      <Text
        color={fontColor}
        fontSize='18px'
        fontWeight='bold'
      >{title}</Text>
      {!!description && <Text>{description}</Text>}
    </Box>
  )
}