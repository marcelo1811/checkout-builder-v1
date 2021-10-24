import { Box } from "@chakra-ui/layout";
import { ReactNode } from "react";

interface IRowBlockProps {
  containerStyles?: any;
  bgColor?: string;
  height?: string;
  children: ReactNode
}

export function RowBlock({ containerStyles, bgColor, height, children }: IRowBlockProps) {
  return (
    <Box
      bg={bgColor}
      height={height}
      style={containerStyles}
      width='100%'
      minHeight='auto'
      display='flex'
      flexDirection='row'
      flexWrap='wrap'
      justifyContent='space-around'
      alignItems='center'
      paddingY={10}
      gridGap={2}
    >
      {children}
    </Box>
  )
}

export default RowBlock;