// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react"
import theme from "config/theme";
import { HomePage } from "pages/HomePage";


function App() {
  // 2. Use at the root of your app
  return (
    <ChakraProvider>
      <HomePage />
    </ChakraProvider>
  )
}

export default App;