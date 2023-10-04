import * as React from "react";
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
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ "& button": { m: 0 } }}>
        <Grid className="details" container spacing={0.5}>
          <h1 className="result">Resultado</h1>
          <Grid item xs={2.4}>
            <Botao fullWidth={true} variant="contained" color="secondary">
              7
            </Botao>
          </Grid>
          <Grid item xs={2.4}>
            <Botao fullWidth={true} variant="contained" color="secondary">
              8
            </Botao>
          </Grid>
          <Grid item xs={2.4}>
            <Botao fullWidth={true} variant="contained" color="secondary">
              9
            </Botao>
          </Grid>
          <Grid item xs={2.4}>
            <Botao fullWidth={true} variant="outlined" color="secondary">
              /
            </Botao>
          </Grid>
          <Grid item xs={2.4}>
            <Botao fullWidth={true} variant="outlined" color="secondary">
              √
            </Botao>
          </Grid>
          <Grid item xs={2.4}>
            <Botao fullWidth={true} variant="contained" color="secondary">
              4
            </Botao>
          </Grid>
          <Grid item xs={2.4}>
            <Botao fullWidth={true} variant="contained" color="secondary">
              5
            </Botao>
          </Grid>
          <Grid item xs={2.4}>
            <Botao fullWidth={true} variant="contained" color="secondary">
              6
            </Botao>
          </Grid>
          <Grid item xs={2.4}>
            <Botao fullWidth={true} variant="outlined" color="secondary">
              X
            </Botao>
          </Grid>
          <Grid item xs={2.4}>
            <Botao fullWidth={true} variant="outlined" color="secondary">
              x²
            </Botao>
          </Grid>
          <Grid item xs={2.4}>
            <Botao fullWidth={true} variant="contained" color="secondary">
              1
            </Botao>
          </Grid>
          <Grid item xs={2.4}>
            <Botao fullWidth={true} variant="contained" color="secondary">
              2
            </Botao>
          </Grid>
          <Grid item xs={2.4}>
            <Botao fullWidth={true} variant="contained" color="secondary">
              3
            </Botao>
          </Grid>
          <Grid item xs={2.4}>
            <Botao fullWidth={true} variant="outlined" color="secondary">
              +
            </Botao>
          </Grid>
          <Grid item xs={2.4}>
            <Botao fullWidth={true} variant="outlined" color="secondary">
              x³
            </Botao>
          </Grid>
          <Grid item xs={2.4}>
            <Botao fullWidth={true} variant="contained" color="secondary">
              0
            </Botao>
          </Grid>
          <Grid item xs={2.4}>
            <Botao fullWidth={true} variant="contained" color="secondary">
              00
            </Botao>
          </Grid>
          <Grid item xs={2.4}>
            <Botao fullWidth={true} variant="contained" color="secondary">
              ,
            </Botao>
          </Grid>
          <Grid item xs={2.4}>
            <Botao fullWidth={true} variant="outlined" color="secondary">
              -
            </Botao>
          </Grid>
          <Grid item xs={2.4}>
            <Botao fullWidth={true} variant="outlined" color="secondary">
              C
            </Botao>
          </Grid>
          <Grid item xs={12}>
            <Botao fullWidth={true} variant="contained" color="primary">
              =
            </Botao>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
