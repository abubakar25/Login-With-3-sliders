import React from "react";
import Capture4 from "../images/Capture4.png";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CarouselComponent from "./CarouselComponent";
import Grid from "@mui/material/Grid";

function NewLayout(props) {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        padding: "60px",
      }}
    >
      <div style={{ width: "60%", height: "70%" }}>
        <form>
          <div>
            <img src={Capture4} alt="" />
          </div>

          <div style={{ margin: "20px", marginTop: "30px" }}>
            <div>
              <p
                style={{
                  paddingLeft: "30px",
                  fontSize: "25px",
                  fontWeight: "900",
                  //   textAlign: "center",
                }}
              >
                Create Account
              </p>
            </div>
            <TextField
              sx={{ width: "300px", marginTop: "15px" }}
              type="email"
              name="email"
              id="email"
              variant="standard"
              label="Email"
              placeholder="joe@email.com"
            />

            <div>
              <TextField
                sx={{ width: "300px", marginTop: "15px" }}
                type="password"
                name="password"
                id="email"
                variant="standard"
                label="Password"
                placeholder="Enter your Password"
              />
            </div>
            <div>
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
            </div>
            <div style={{ width: "300px" }}>
              <p>
                &nbsp;&nbsp;&nbsp; Already have an account?{" "}
                <a href="">Log in here</a>.
              </p>
            </div>
          </div>
        </form>
      </div>

      {/* <div style={{ width: "50%", height: "70%", backgroundColor: "yellow" }}>
        <CarouselComponent />
      </div> */}
    </div>
  );
}

export default NewLayout;
