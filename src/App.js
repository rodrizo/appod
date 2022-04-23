import HomePage from "pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider, Container } from "@chakra-ui/react";
import Navbar from "components/Navbar";
import Favorites from "pages/Favorites";
export default function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />

        <Container maxW='container.xl'>
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="favorites" element={<Favorites/>} />
          </Routes>
        </Container>
      </Router>
    </ChakraProvider>
  );
}
