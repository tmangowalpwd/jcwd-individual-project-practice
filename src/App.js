import { Box, Center, Text } from "@chakra-ui/react";
import HomePage from "./pages/home";
import ProfilePage from "./pages/profile";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box>
      <Text>Navbar</Text>
    </Box>
  )
}

function App() {
  return (
    <Box paddingX="16">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
