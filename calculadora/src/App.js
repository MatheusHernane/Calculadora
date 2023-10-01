import { Box, Container } from "@mui/material";
import "./App.css";
import Botao from "./components/botao";
import Calculadora from "./components/calculadora";

function App() {
  return (
    <div className="App">
      <h1>Calculadora UI</h1>
      <Container maxWidth="xs">
        <Box sx={{ bgcolor: "#fff", height: "300px" }}>
          <Calculadora />
          <Botao />
        </Box>
      </Container>
    </div>
  );
}

export default App;
