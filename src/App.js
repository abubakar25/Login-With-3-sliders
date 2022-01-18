import React from "react";
import LoginSlider from "./components/LoginSlider";
import Grid from "@mui/material/Grid";
import CarouselResponsive from "./components/CarouselResponsive";
import LoginSliderResponsive from "./components/LoginSliderResponsive";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";

function App() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            marginTop: "100px",
          }}
        >
          <Box
            sx={{
              width: matches ? "50%" : "100%",
              height: matches ? "62.5%" : "58%",
              borderRadius: "20px",
              boxShadow: "10px 0px 30px 5px rgba(0, 0, 0, 0.27)",
            }}
          >
            <Grid container spacing={0}>
              <Grid item xs={12} md={6}>
                <LoginSliderResponsive />
              </Grid>
              <Grid item xs={12} md={6}>
                <CarouselResponsive />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </ThemeProvider>

      {/* <Box>
        <LoginSlider />
      </Box> */}
    </>
  );
}

export default App;
