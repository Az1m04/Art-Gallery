import React from "react";
import { CircleMenu, CircleMenuItem } from "react-circular-menu";
import Draggable from "react-draggable";
import Art from "../../images/Art.png";
import Home from "../../images/home.png";
import Info from "../../images/info.png";
const FloatingMenu = () => {
  return (
    // <Draggable positionOffset={{ x: "10%", y: "50%" }}>
      <div
        style={{
          position: "fixed",
          right: "100px",
          top:"45%",
          zIndex: "10",
          marginLeft: "100px",
        }}
      >
        <CircleMenu
          startAngle={90}
          rotationAngle={270}
          itemSize={2}
          radius={4}
          rotationAngleInclusive={false}
        >
          <CircleMenuItem
            tooltip="About"
            tooltipPlacement="right"
          >
            <a href="#info">
              <img src={Info} alt="info" height={50} width={50} />
            </a>
          </CircleMenuItem>
          <CircleMenuItem
            tooltip="Art Gallery"
          >
            <a href="#new-arrivals">
              <img src={Art} alt="Art" height={50} width={50} />
            </a>
          </CircleMenuItem>
          <CircleMenuItem
            tooltip="Home"
            tooltipPlacement="top"
          >
            <a href="#home">
              <img src={Home} alt="Home" height={50} width={50} />
            </a>
          </CircleMenuItem>
        </CircleMenu>
      </div>
    // </Draggable>
  );
};

export default FloatingMenu;
