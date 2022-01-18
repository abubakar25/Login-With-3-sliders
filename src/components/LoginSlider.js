import React from "react";
import CarouselComponent from "./CarouselComponent";
import "./styles.css";
import Capture4 from "../images/Capture4.png";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function LoginSlider(props) {
  return (
    <>
      <div>
        <div
          style={{
            position: "relative",
            zIndex: "2",
            width: "100%",
            minHeight: "850px",
            display: "-webkit-box",
            display: "-webkit-flex",
            display: "-moz-box",
            display: "-ms-flexbox",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            padding: "0 10%",
            paddingTop: "50px",
            background: "rgb(106, 106, 106)",
          }}
        >
          <div
            style={{
              WebkitBoxShadow: "10px 0px 30px 5px rgba(0, 0, 0, 0.27)",
              MozBoxShadow: "10px 0px 30px 5px rgba(0, 0, 0, 0.27)",
              boxShadow: "10px 0px 30px 5px rgba(0, 0, 0, 0.27)",
              background: "#fff",
              overflow: "hidden",
              display: "-webkit-box",
              display: "-webkit-flex",
              display: "-moz-box",
              display: "-ms-flexbox",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "stretch",
              flexDirection: "row-reverse",
              padding: "0px",
              width: "60%",
              height: "auto",
              borderRadius: "30px",
            }}
          >
            <div
              style={{
                width: "50%",
                zIndex: "1",
                position: "relative",
                height: "625px",
              }}
            >
              <CarouselComponent />
            </div>
            <form
              style={{
                width: "50%",
                display: "-webkit-box",
                display: "-webkit-flex",
                display: "-moz-box",
                display: "-ms-flexbox",
                display: "flex",
                flexWrap: "wrap",
                padding: "50px",
              }}
            >
              <div>
                <img src={Capture4} alt="" />
              </div>
              <div style={{ margin: "10px" }}>
                <span
                  style={{
                    fontSize: "25px",
                    fontWeight: "900",
                    textAlign: "center",
                    width: "100%",
                    display: "block",
                    paddingBottom: "25px",
                  }}
                >
                  Create Account
                </span>

                <TextField
                  sx={{ width: "300px", marginTop: "15px" }}
                  type="email"
                  name="email"
                  id="email"
                  variant="standard"
                  label="Email"
                  placeholder="joe@email.com"
                />

                <div
                  style={{
                    width: "100%",
                    display: "block",
                    height: "80px",
                  }}
                >
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
                <div
                  style={{
                    width: "100%",
                    display: "block",
                    height: "80px",
                  }}
                >
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{
                      width: "300px",
                      marginTop: "5px",
                      backgroundColor: "black",
                    }}
                  >
                    Sign up
                  </Button>
                </div>
                <div>
                  <p style={{ textAlign: "center", fontSize: "13px" }}>
                    Already have an account?{" "}
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
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginSlider;
