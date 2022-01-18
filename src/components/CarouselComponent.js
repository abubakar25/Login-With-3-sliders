import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Capture1 from "../images/Capture1.png";
import Capture2 from "../images/Capture2.png";
import Capture3 from "../images/Capture3.png";
import back1 from "../images/back1.jpg";
import back2 from "../images/back2.jpg";
import back3 from "../images/back3.jpg";

function CarouselComponent(props) {
  return (
    <>
      <div>
        <Carousel
          autoPlay
          infiniteLoop
          interval={2000}
          showThumbs={false}
          showArrows={false}
          showStatus={false}
        >
          <div>
            <div style={{ backgroundImage: `url(${back1})`, height: "427px" }}>
              <img
                src={Capture1}
                style={{
                  width: "220px",
                  height: "220px",
                  position: "relative",
                  top: 240,
                }}
              />
            </div>
            <div style={{ backgroundColor: "#b0535c", height: "250px" }}>
              <div>
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
              </div>
            </div>
          </div>
          <div>
            <div style={{ backgroundImage: `url(${back2})`, height: "427px" }}>
              <img
                src={Capture2}
                style={{
                  width: "220px",
                  height: "220px",
                  position: "relative",
                  top: 240,
                }}
              />
            </div>
            <div style={{ backgroundColor: "#1A1A1A", height: "250px" }}>
              <div>
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
                  Customize each individual order, choice of paper and quality
                  <br />
                  of printing,place of departure and much more
                </p>
              </div>
            </div>
          </div>

          <div>
            <div style={{ backgroundImage: `url(${back3})`, height: "427px" }}>
              <img
                src={Capture3}
                style={{
                  width: "220px",
                  height: "220px",
                  position: "relative",
                  top: 240,
                }}
              />
            </div>
            <div style={{ backgroundColor: "#34265c", height: "250px" }}>
              <div>
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
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default CarouselComponent;
