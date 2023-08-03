import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Box, ChakraProvider, theme} from "@chakra-ui/react";
import TopBar from "./components/TopBar.tsx";
import TodoAdd from "./components/TodoAdd.tsx";
import TodoList from "./components/TodoList.tsx";

function App() {

  return (
    <ChakraProvider theme={theme}>
     <Box maxWidth='8xl' margin='auto' p={5}>
         <TopBar/>
         <TodoList/>
         <TodoAdd/>
     </Box>
    </ChakraProvider>
  )
}

export default App
