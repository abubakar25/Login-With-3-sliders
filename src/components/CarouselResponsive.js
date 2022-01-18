import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Box from "@mui/material/Box";
import { Carousel } from "react-responsive-carousel";
import Capture1 from "../images/Capture1.png";
import Capture2 from "../images/Capture2.png";
import Capture3 from "../images/Capture3.png";
import Slider1 from "../images/Slider1.jpg";
import Slider2 from "../images/Slider2.jpg";
import Slider3 from "../images/Slider3.jpg";

function CarouselComponent(props) {
  return (
    <>
      <Box>
        <Carousel
          autoPlay
          infiniteLoop
          interval={2000}
          showThumbs={false}
          showArrows={false}
          showStatus={false}
        >
          <Box>
            <Box
              sx={{
                backgroundImage: `url(${Slider1})`,
                height: "347px",
              }}
            >
              <img
                src={Capture1}
                style={{
                  width: "220px",
                  height: "220px",
                  position: "relative",
                  top: 160,
                }}
              />
            </Box>
            <Box sx={{ backgroundColor: "#b0535c", height: "220px" }}>
              <Box>
                <h3
                  style={{
                    paddingTop: "55px",
                    color: "white",
                  }}
                >
                  Manage your orders
                </h3>
                <p
                  style={{
                    marginTop: "20px",
                    fontSize: "14px",
                    margin: "1em 0",
                    lineHeight: "28px",
                    fontWeight: "400",
                    color: "white",
                  }}
                >
                  An easy way to manage your files,creates groups of orders
                  <br /> and send it to different ways
                </p>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box sx={{ backgroundImage: `url(${Slider2})`, height: "347px" }}>
              <img
                src={Capture2}
                style={{
                  width: "220px",
                  height: "220px",
                  position: "relative",
                  top: 160,
                }}
              />
            </Box>
            <Box sx={{ backgroundColor: "#1A1A1A", height: "220px" }}>
              <Box>
                <h3
                  style={{
                    paddingTop: "55px",
                    color: "white",
                  }}
                >
                  New opportunities for cooperation
                </h3>
                <p
                  style={{
                    marginTop: "20px",
                    fontSize: "14px",
                    margin: "1em 0",
                    lineHeight: "28px",
                    fontWeight: "400",
                    color: "white",
                  }}
                >
                  Customize each inBoxidual order, choice of paper and quality
                  <br />
                  of printing,place of departure and much more
                </p>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box sx={{ backgroundImage: `url(${Slider3})`, height: "347px" }}>
              <img
                src={Capture3}
                style={{
                  width: "220px",
                  height: "220px",
                  position: "relative",
                  top: 160,
                }}
              />
            </Box>
            <Box sx={{ backgroundColor: "#34265c", height: "220px" }}>
              <Box>
                <h3
                  style={{
                    paddingTop: "55px",
                    color: "white",
                  }}
                >
                  Check the status
                </h3>
                <p
                  style={{
                    marginTop: "20px",
                    fontSize: "14px",
                    margin: "1em 0",
                    lineHeight: "28px",
                    fontWeight: "400",
                    color: "white",
                  }}
                >
                  It's easy to check of status of your online orders
                </p>
              </Box>
            </Box>
          </Box>
          {/* <Box>
            <Box style={{ backgroundImage: `url(${back3})`, height: "427px" }}>
              <img
                src={Capture3}
                style={{
                  width: "220px",
                  height: "220px",
                  position: "relative",
                  top: 240,
                }}
              />
            </Box>
            <Box style={{ backgroundColor: "#34265c", height: "250px" }}>
              <Box>
                <h3
                  style={{
                    paddingTop: "55px",
                    color: "white",
                  }}
                >
                  Check the status
                </h3>
                <p
                  style={{
                    marginTop: "20px",
                    fontSize: "14px",
                    margin: "1em 0",
                    lineHeight: "28px",
                    fontWeight: "400",
                    color: "white",
                  }}
                >
                  It's easy to check of status of your online orders
                </p>
              </Box>
            </Box>
          </Box> */}
        </Carousel>
      </Box>
    </>
  );
}

export default CarouselComponent;
