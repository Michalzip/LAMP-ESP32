import React from "react";
import CustomPopUp from "../../CustomPopUp/CustomPopUp";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SectionColorPopUp.css";

const SectionColorPopUp = (props) => {
  return (
    <CustomPopUp
      trigger={props.trigger}
      describe="Choose your favorite section color"
    >
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

            <Dropdown.Menu>
              <Dropdown.Item
                className="sectionColor"
                onClick={() => {
                  console.log("dw");
                }}
              >
                Rainbow
              </Dropdown.Item>

              <Dropdown.Item className="sectionColor">Fire</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </CustomPopUp>
  );
};
export default SectionColorPopUp;
