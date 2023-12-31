import React from "react";
import LayoutContainer from "../../Common/LayoutContainer/LayoutContainer";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SectionColor.css";
import SetFireSectionColor from "../../../api/SetFireSectionColor";
import SetRainbowSectionColor from "../../../api/SetRainbowSectionColor";

const SectionColor = () => {
  return (
    <LayoutContainer describe="Choose your favorite section color">
      <div className="content">
        <div className="title">Select Section Color</div>
        <div className="colorList">
          <Dropdown>
            <Dropdown.Toggle
              className="dropDown"
              variant="secondary"
              id="dropdown-basic"
            >
              Color Section
            </Dropdown.Toggle>

            <Dropdown.Menu className="Menu">
              <Dropdown.Item
                className="sectionColor"
                onClick={() => {
                  SetRainbowSectionColor();
                }}
              >
                Rainbow
              </Dropdown.Item>
              <Dropdown.Item
                className="sectionColor"
                onClick={() => {
                  SetFireSectionColor();
                }}
              >
                Fire
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </LayoutContainer>
  );
};
export default SectionColor;
