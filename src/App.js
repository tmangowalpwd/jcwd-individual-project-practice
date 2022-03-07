import { Box, Button, Center } from "@chakra-ui/react";
import { useState } from "react";
import HomePage from "./pages/home";
import HomeClass from "./pages/home/homeClass";

function App() {
  const [currentPage, setCurrentPage] = useState(true);

  return (
    <Box paddingX="16">
      <Button onClick={() => setCurrentPage(!currentPage)}>
        Change page
      </Button>
      <Center>
        {
          currentPage ?
            <HomePage />
            :
            <HomeClass />
        }
      </Center>
    </Box>
  );
}

export default App;
