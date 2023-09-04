import React, { useState } from "react";
import Button from "../Common/Button/Button";
import CustomColorPopUp from "../Color/CustomColorPopUp/CustomColorPopUp";
import SectionColorPopUp from "../Color/SectionColorPopUp/SectionColorPopUp";
import "./MenuContainer.css";

const MenuContainer = () => {
  const [buttonPopUp, setButtonPopUp] = useState(false);
  const [buttonPopUp2, setButtonPopUp2] = useState(false);
  return (
    <div className="container">
      <div className="container-title">
        <p>Welcome!</p>
      </div>
      <div className="container-buttons">
        <form>
          <Button
            text="Custom Color"
            onClick={() => setButtonPopUp(true)}
          ></Button>
          <Button
            text="Section Color"
            onClick={() => setButtonPopUp2(true)}
          ></Button>
          <CustomColorPopUp
            trigger={buttonPopUp}
            setTrigger={setButtonPopUp}
          ></CustomColorPopUp>

          <SectionColorPopUp
            trigger={buttonPopUp2}
            setTrigger={setButtonPopUp2}
          ></SectionColorPopUp>
        </form>
      </div>
    </div>
  );
};

export default MenuContainer;
