import React, { useState } from "react";
import CustomPopUp from "../../CustomPopUp/CustomPopUp";
import { Wheel } from "@uiw/react-color";
import HexToRgbConverter from "../../../service/HexToRgbConverter";
import "./CustomColor.css";
import SetCustomColor from "../../../api/SetCustomColor";

const CustomColor = () => {
  const [hex, setHex] = useState("#fff");
  return (
    <CustomPopUp describe="Choose your favorite colors thanks to the color palette">
      <div className="content">
        <div className="title">Select Your Color</div>

        <Wheel
          style={{ marginLeft: 20 }}
          color={hex}
          onChange={(color) => {
            setHex(color.hex);
          }}
          onClick={() => {
            var colorData = HexToRgbConverter(hex);
            SetCustomColor(colorData[0], colorData[1], colorData[2]);
          }}
        />

        <div className="color">Color: {hex}</div>
      </div>
    </CustomPopUp>
  );
};

export default CustomColor;
