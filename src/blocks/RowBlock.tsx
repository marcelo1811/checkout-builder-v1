import { Box } from "@chakra-ui/layout";
import { ReactNode } from "react";

interface IRowBlockProps {
  containerStyles?: any;
  backgroundColor: string;
  height?: string;
  children: ReactNode
}

export function RowBlock({ containerStyles, backgroundColor, height, children }: IRowBlockProps) {
  return (
    <Box
      bg={backgroundColor}
      height={height}
      style={containerStyles}
      width='100%'
      minHeight='auto'
      display='flex'
      flexDirection='row'
      flexWrap='wrap'
      justifyContent='space-around'
      alignItems='center'
    >
      {children}
    </Box>
  )
}