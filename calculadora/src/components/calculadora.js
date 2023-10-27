import * as React from "react";
import { useState } from "react";
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
  const [num, setNum] = useState(0);
  const [oldnum, setOldnum] = useState(0);
  const [operator, setOperator] = useState();

  function inputNum(e) {
    let input = e.target.value;
    if (num === 0) {
      setNum(input);
    } else {
      setNum(num + input);
    }
  }

  function clear() {
    setNum(0);
    setOldnum(0);
    setOperator(0);
  }

  function operation(e) {
    var operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldnum(num);
    setNum(0);
  }

  function calculate() {
    if (operator === "/") {
      setNum(parseFloat(oldnum) / parseFloat(num)); //parseFloat converte a string em número
    } else if (operator === "x") {
      setNum(parseFloat(oldnum) * parseFloat(num));
    } else if (operator === "+") {
      setNum(parseFloat(oldnum) + parseFloat(num));
    } else if (operator === "-") {
      setNum(parseFloat(oldnum) - parseFloat(num));
    } else if (operator === "x²") {
      setNum(parseFloat(oldnum) * parseFloat(oldnum));
    } else if (operator === "x³") {
      setNum(parseFloat(oldnum) * parseFloat(oldnum) * parseFloat(oldnum));
    } else if (operator === "√") {
      setNum(Math.sqrt(parseFloat(oldnum)));
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ "& button": { m: 0 } }}>
        <Grid className="details" container spacing={0.5}>
          <h1 className="result">{num}</h1>
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
            >
              =
            </Botao>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
