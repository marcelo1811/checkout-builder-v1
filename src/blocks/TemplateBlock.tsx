import { Box, Text } from "@chakra-ui/layout";

interface ITemplateBlockProps {
  containerStyles: any;
}

export function TemplateBlock({ containerStyles }: ITemplateBlockProps) {
  return (
    <Box style={containerStyles}>
    </Box>
  )
}