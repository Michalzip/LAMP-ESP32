import React, { useState } from "react";
import CustomPopUp from "../../CustomPopUp/CustomPopUp";
import { Wheel } from "@uiw/react-color";
import "./CustomColorPopUp.css";

const CustomColorPopUp = (props) => {
  const [hex, setHex] = useState("#fff");
  return (
    <CustomPopUp trigger={props.trigger}>
      <div className="content">
        <div className="title">Select Your Color</div>

        <Wheel
          style={{ marginLeft: 20 }}
          color={hex}
          onChange={(color) => {
            setHex(color.hex);
          }}
          onClick={() => {
            console.log("jd");
          }}
        />

        <div className="color">Color: {hex}</div>
      </div>
    </CustomPopUp>
  );
};

export default CustomColorPopUp;
