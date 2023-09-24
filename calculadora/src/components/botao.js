import * as React from "react";
import Button from "@mui/material/Button";
import { Box, Grid } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./botao.css";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "2rem",
          width: "4.5rem",
          height: "4.5rem",
        },
      },
    },
  },
});

export default function botao() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ "& button": { m: 0.5 } }}>
        <Grid className="details" container spacing={0}>
          <h1 className="result">Resultado</h1>
          <Grid item xs={2.4}>
            <Button variant="contained" color="secondary">
              7
            </Button>
          </Grid>
          <Grid item xs={2.4}>
            <Button variant="contained" color="secondary">
              8
            </Button>
          </Grid>
          <Grid item xs={2.4}>
            <Button variant="contained" color="secondary">
              9
            </Button>
          </Grid>
          <Grid item xs={2.4}>
            <Button variant="outlined" color="secondary">
              /
            </Button>
          </Grid>
          <Grid item xs={2.4}>
            <Button variant="outlined" color="secondary">
              √
            </Button>
          </Grid>
          <Grid item xs={2.4}>
            <Button variant="contained" color="secondary">
              4
            </Button>
          </Grid>
          <Grid item xs={2.4}>
            <Button variant="contained" color="secondary">
              5
            </Button>
          </Grid>
          <Grid item xs={2.4}>
            <Button variant="contained" color="secondary">
              6
            </Button>
          </Grid>
          <Grid item xs={2.4}>
            <Button variant="outlined" color="secondary">
              X
            </Button>
          </Grid>
          <Grid item xs={2.4}>
            <Button variant="outlined" color="secondary">
              x²
            </Button>
          </Grid>
          <Grid item xs={2.4}>
            <Button variant="contained" color="secondary">
              1
            </Button>
          </Grid>
          <Grid item xs={2.4}>
            <Button variant="contained" color="secondary">
              2
            </Button>
          </Grid>
          <Grid item xs={2.4}>
            <Button variant="contained" color="secondary">
              3
            </Button>
          </Grid>
          <Grid item xs={2.4}>
            <Button variant="outlined" color="secondary">
              +
            </Button>
          </Grid>
          <Grid item xs={2.4}>
            <Button variant="outlined" color="secondary">
              x³
            </Button>
          </Grid>
          <Grid item xs={2.4}>
            <Button variant="contained" color="secondary">
              0
            </Button>
          </Grid>
          <Grid item xs={2.4}>
            <Button variant="contained" color="secondary">
              00
            </Button>
          </Grid>
          <Grid item xs={2.4}>
            <Button variant="contained" color="secondary">
              ,
            </Button>
          </Grid>
          <Grid item xs={2.4}>
            <Button variant="outlined" color="secondary">
              -
            </Button>
          </Grid>
          <Grid item xs={2.4}>
            <Button variant="outlined" color="secondary">
              C
            </Button>
          </Grid>
          <Button fullWidth={true} variant="outlined" color="secondary">
            =
          </Button>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
