import React from "react";
import Capture4 from "../images/Capture4.png";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function LoginSliderResponsive(props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          padding: "15px",
        }}
      >
        <Box sx={{ width: "60%", height: "70%" }}>
          <form>
            <Box>
              <img src={Capture4} alt="" />
            </Box>

            <Box sx={{ margin: "20px", marginTop: "50px" }}>
              <Box>
                <p
                  style={{
                    paddingLeft: "30px",
                    fontSize: matches ? "25px" : "17px",
                    fontWeight: "900",
                  }}
                >
                  Create Account
                </p>
              </Box>
              <TextField
                sx={{ width: "300px", marginTop: "20px" }}
                type="email"
                name="email"
                id="email"
                variant="standard"
                label="Email"
                placeholder="joe@email.com"
              />

              <Box>
                <TextField
                  sx={{ width: "300px", marginTop: "20px" }}
                  type="password"
                  name="password"
                  id="email"
                  variant="standard"
                  label="Password"
                  placeholder="Enter your Password"
                />
              </Box>
              <Box>
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    width: "300px",
                    marginTop: "35px",
                    backgroundColor: "black",
                  }}
                >
                  Sign up
                </Button>
              </Box>
              <Box sx={{ width: "300px", marginTop: "20px" }}>
                <p>
                  &nbsp;&nbsp;&nbsp; Already have an account?{" "}
                  <a
                    href=""
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    Log in here
                  </a>
                </p>
              </Box>
            </Box>
          </form>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default LoginSliderResponsive;
