import * as React from "react";
import useCalculator from "../hooks/useCalculator";
import { Box, Grid } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Botao from "./botao";
import "./calculadora.css";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "2rem",
          height: "4.5rem",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#7b1fa2",
    },
  },
});

export default function Calculadora() {
  const {
    inputNum,
    clear,
    operation,
    calculate,
    oldnum,
    operator,
    result,
    equal,
    second,
  } = useCalculator();
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ "& button": { m: 0 } }}>
        <Grid className="details" container spacing={0.5}>
          <h1 className="result">
            {oldnum}
            {operator}
            {second}
            {equal}
          </h1>
          <h1 className="resultTotal">{result}</h1>
          <Grid item xs={2.4}>
            <Botao
              fullWidth={true}
              variant="outlined"
              color="secondary"
              onClick={inputNum}
              value={7}
            >
              7
            </Botao>
          </Grid>
          <Grid item xs={2.4}>
            <Botao
              fullWidth={true}
              variant="outlined"
              color="secondary"
              onClick={inputNum}
              value={8}
            >
              8
            </Botao>
          </Grid>
          <Grid item xs={2.4}>
            <Botao
              fullWidth={true}
              variant="outlined"
              color="secondary"
              onClick={inputNum}
              value={9}
            >
              9
            </Botao>
          </Grid>
          <Grid item xs={2.4}>
            <Botao
              fullWidth={true}
              variant="contained"
              color="secondary"
              onClick={operation}
              value={"/"}
            >
              /
            </Botao>
          </Grid>
          <Grid item xs={2.4}>
            <Botao
              fullWidth={true}
              variant="contained"
              color="secondary"
              onClick={operation}
              value={"√"}
            >
              √
            </Botao>
          </Grid>
          <Grid item xs={2.4}>
            <Botao
              fullWidth={true}
              variant="outlined"
              color="secondary"
              onClick={inputNum}
              value={4}
            >
              4
            </Botao>
          </Grid>
          <Grid item xs={2.4}>
            <Botao
              fullWidth={true}
              variant="outlined"
              color="secondary"
              onClick={inputNum}
              value={5}
            >
              5
            </Botao>
          </Grid>
          <Grid item xs={2.4}>
            <Botao
              fullWidth={true}
              variant="outlined"
              color="secondary"
              onClick={inputNum}
              value={6}
            >
              6
            </Botao>
          </Grid>
          <Grid item xs={2.4}>
            <Botao
              fullWidth={true}
              variant="contained"
              color="secondary"
              onClick={operation}
              value={"x"}
            >
              x
            </Botao>
          </Grid>
          <Grid item xs={2.4}>
            <Botao
              fullWidth={true}
              variant="contained"
              color="secondary"
              onClick={operation}
              value={"x²"}
            >
              x²
            </Botao>
          </Grid>
          <Grid item xs={2.4}>
            <Botao
              fullWidth={true}
              variant="outlined"
              color="secondary"
              onClick={inputNum}
              value={1}
            >
              1
            </Botao>
          </Grid>
          <Grid item xs={2.4}>
            <Botao
              fullWidth={true}
              variant="outlined"
              color="secondary"
              onClick={inputNum}
              value={2}
            >
              2
            </Botao>
          </Grid>
          <Grid item xs={2.4}>
            <Botao
              fullWidth={true}
              variant="outlined"
              color="secondary"
              onClick={inputNum}
              value={3}
            >
              3
            </Botao>
          </Grid>
          <Grid item xs={2.4}>
            <Botao
              fullWidth={true}
              variant="contained"
              color="secondary"
              onClick={operation}
              value={"+"}
            >
              +
            </Botao>
          </Grid>
          <Grid item xs={2.4}>
            <Botao
              fullWidth={true}
              variant="contained"
              color="secondary"
              onClick={operation}
              value={"x³"}
            >
              x³
            </Botao>
          </Grid>
          <Grid item xs={2.4}>
            <Botao
              fullWidth={true}
              variant="outlined"
              color="secondary"
              onClick={inputNum}
              value={0}
            >
              0
            </Botao>
          </Grid>
          <Grid item xs={2.4}>
            <Botao
              fullWidth={true}
              variant="outlined"
              color="secondary"
              onClick={inputNum}
              value={"00"}
            >
              00
            </Botao>
          </Grid>
          <Grid item xs={2.4}>
            <Botao
              fullWidth={true}
              variant="outlined"
              color="secondary"
              onClick={inputNum}
              value={"."}
            >
              .
            </Botao>
          </Grid>
          <Grid item xs={2.4}>
            <Botao
              fullWidth={true}
              variant="contained"
              color="secondary"
              onClick={operation}
              value={"-"}
            >
              -
            </Botao>
          </Grid>
          <Grid item xs={2.4}>
            <Botao
              fullWidth={true}
              variant="contained"
              color="secondary"
              onClick={clear}
            >
              C
            </Botao>
          </Grid>
          <Grid item xs={12}>
            <Botao
              fullWidth={true}
              variant="contained"
              color="primary"
              onClick={calculate}
              value={"="}
            >
              =
            </Botao>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
