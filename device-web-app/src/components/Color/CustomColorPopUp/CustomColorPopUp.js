import React, { useState } from "react";
import CustomPopUp from "../../CustomPopUp/CustomPopUp";
import { Wheel } from "@uiw/react-color";
import HexToRgbConverter from "../../../service/HexToRgbConverter";
import "./CustomColorPopUp.css";

const CustomColorPopUp = (props) => {
  const [hex, setHex] = useState("#fff");
  return (
    <CustomPopUp
      trigger={props.trigger}
      describe="Choose your favorite colors thanks to the color palette"
    >
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
            console.log("click");
            fetchData(colorData[0], colorData[1], colorData[2]);
          }}
        />

        <div className="color">Color: {hex}</div>
      </div>
    </CustomPopUp>
  );
};

const fetchData = async (r, g, b) => {
  try {
    // Twój URL API do pobrania kolorów z dodatkowym parametrem 'type'
    const apiUrl = `http://192.168.100.106/custom-color?r=${r}&g=${g}&b=${b}`;

    // Wywołanie fetch API z użyciem await
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Błąd sieci");
    }

    // Ustawienie pobranych kolorów w stanie komponentu
  } catch (error) {
    console.error("Błąd podczas pobierania kolorów:", error);
  }
};

export default CustomColorPopUp;
