import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { brickworkActions } from "../store/brickworkSlice";

const Brickwork = () => {
  const [widthToggle, setWidthToggle] = useState(false);
  const [customBrick, setCustomBrick] = useState(false);

  const dispatch = useDispatch();

  const { bricks, cement, sand } = useSelector((store) => store.brickwork);

  const areaElement = useRef();
  const areaUnitElement = useRef();
  const widthElement = useRef();
  const customWidthElement = useRef();
  const customWidthUnitElement = useRef();
  const brickLengthElement = useRef();
  const brickHeightElement = useRef();
  const brickWidthElement = useRef();
  const brickLengthUnitElement = useRef();
  const brickHeightUnitElement = useRef();
  const brickWidthUnitElement = useRef();
  const brickVolumeElement = useRef();

  const handleWidthToggle = () => {
    setWidthToggle(true);
  };

  const handleCustomBrick = () => {
    setCustomBrick(true);
  };

  const handleCalculation = (e) => {
    e.preventDefault();

    const area = areaElement.current ? areaElement.current.value : "";
    const areaUnit = areaUnitElement.current
      ? areaUnitElement.current.value
      : "";

    const customWidth = customWidthElement.current
      ? customWidthElement.current.value
      : " ";
    const customWidthUnit = customWidthUnitElement.current
      ? customWidthUnitElement.current.value
      : "";

    let customWidthInMeters;
    switch (customWidthUnit) {
      case "mm":
        customWidthInMeters = customWidth / 1000;
        break;
      case "cm":
        customWidthInMeters = customWidth / 100;
        break;
      case "in":
        customWidthInMeters = customWidth / 39.37;
        break;
      case "ft":
        customWidthInMeters = customWidth / 3.281;
        break;
      default:
        customWidthInMeters = customWidth;
    }

    const width = widthElement.current
      ? widthElement.current.value
      : customWidthInMeters;

    const brickLength = brickLengthElement.current
      ? brickLengthElement.current.value
      : "";
    const brickHeight = brickHeightElement.current
      ? brickHeightElement.current.value
      : "";
    const brickWidth = brickWidthElement.current
      ? brickWidthElement.current.value
      : "";
    const brickLengthUnit = brickLengthUnitElement.current
      ? brickLengthUnitElement.current.value
      : "";
    const brickHeightUnit = brickHeightUnitElement.current
      ? brickHeightUnitElement.current.value
      : "";
    const brickWidthUnit = brickWidthUnitElement.current
      ? brickWidthUnitElement.current.value
      : "";

    let brickLengthInMeters;
    switch (brickLengthUnit) {
      case "mm":
        brickLengthInMeters = brickLength / 1000;
        break;
      case "cm":
        brickLengthInMeters = brickLength / 100;
        break;
      case "in":
        brickLengthInMeters = brickLength / 39.37;
        break;
      case "ft":
        brickLengthInMeters = brickLength / 3.281;
        break;
      default:
        brickLengthInMeters = brickLength;
    }

    let brickHeightInMeters;
    switch (brickHeightUnit) {
      case "mm":
        brickHeightInMeters = brickHeight / 1000;
        break;
      case "cm":
        brickHeightInMeters = brickHeight / 100;
        break;
      case "in":
        brickHeightInMeters = brickHeight / 39.37;
        break;
      case "ft":
        brickHeightInMeters = brickHeight / 3.281;
        break;
      default:
        brickHeightInMeters = brickHeight;
    }

    let brickWidthInMeters;
    switch (brickWidthUnit) {
      case "mm":
        brickWidthInMeters = brickWidth / 1000;
        break;
      case "cm":
        brickWidthInMeters = brickWidth / 100;
        break;
      case "in":
        brickWidthInMeters = brickWidth / 39.37;
        break;
      case "ft":
        brickWidthInMeters = brickWidth / 3.281;
        break;
      default:
        brickWidthInMeters = brickWidth;
    }

    const customBrickVolume =
      brickHeightInMeters * brickLengthInMeters * brickWidthInMeters;

    const brickVolume = brickVolumeElement.current
      ? brickVolumeElement.current.value
      : customBrickVolume;

    dispatch(
      brickworkActions.calculateBrickwork({
        area,
        areaUnit,
        width,
        brickVolume,
      })
    );
  };

  return (
    <div className="main-content">
      <div className="form-container">
        <h2 className="form-title">Brickwork</h2>
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter Area"
            className="input-field"
            ref={areaElement}
          />
          <select className="select-field" ref={areaUnitElement}>
            <option value="m2">m²</option>
            <option value="mm2">mm²</option>
            <option value="cm2">cm²</option>
            <option value="in2">in²</option>
            <option value="ft2">ft²</option>
          </select>
        </div>

        
          {widthToggle ? (
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter Wall Width"
                className="brickwork-custom-input"
                ref={customWidthElement}
              />
              <select
                className="brickwork-custom-select"
                ref={customWidthUnitElement}
              >
                <option value="m">m</option>
                <option value="mm">mm</option>
                <option value="cm">cm</option>
                <option value="in">in</option>
                <option value="ft">ft</option>
              </select>
            </div>
          ) : (
            <div className="form-group">
            <select
              ref={widthElement}
              className="brickwork-input-field"
              onChange={(event) => {
                if (event.target.value === "custom") {
                  handleWidthToggle();
                }
              }}
            >
              <option value="0.1">Wall Width - 100mm / 4"</option>
              <option value="0.15">Wall Width - 150mm / 6"</option>
              <option value="0.2">Wall Width - 200mm / 8"</option>
              <option value="0.23">Wall Width - 230mm / 9"</option>
              <option value="custom">Wall Custom Width</option>
            </select>
            </div>
          )}
      

        {customBrick ? (
          <div className="custom-width-flexbox">
            <div className="brickwork-form-group">
              <input
                type="text"
                placeholder="Length (without mortar)"
                className="brickwork-custom-input"
                ref={brickLengthElement}
              />
              <select
                name="brick_length"
                className="brickwork-custom-select"
                ref={brickLengthUnitElement}
              >
                <option value="m">m</option>
                <option value="mm">mm</option>
                <option value="cm">cm</option>
                <option value="in">in</option>
                <option value="ft">ft</option>
              </select>
            </div>

            <div className="brickwork-form-group">
              <input
                type="text"
                placeholder="Height (without mortar)"
                className="brickwork-custom-input"
                ref={brickHeightElement}
              />
              <select
                name="brick_height"
                className="brickwork-custom-select"
                ref={brickHeightUnitElement}
              >
                <option value="m">m</option>
                <option value="mm">mm</option>
                <option value="cm">cm</option>
                <option value="in">in</option>
                <option value="ft">ft</option>
              </select>
            </div>

            <div className="brickwork-form-group">
              <input
                type="text"
                placeholder="Width (without mortar)"
                className="brickwork-custom-input"
                ref={brickWidthElement}
              />
              <select
                name="brick_width"
                className="brickwork-custom-select"
                ref={brickWidthUnitElement}
              >
                <option value="m">m</option>
                <option value="mm">mm</option>
                <option value="cm">cm</option>
                <option value="in">in</option>
                <option value="ft">ft</option>
              </select>
            </div>
          </div>
        ) : (
          <div className="form-group">
          <select
            className="brickwork-input-field"
            ref={brickVolumeElement}
            onChange={(event) => {
              if (event.target.value === "custom") {
                handleCustomBrick();
              }
            }}
          >
            <option value="0.001539">
              Common Burnt Clay Bricks: (190 x 90 x 90 mm)
            </option>
            <option value="0.002">Concrete Bricks: (200 x 100 x 100 mm)</option>
            <option value="0.001771">
              Fly Ash Clay Bricks: (230 x 110 x 70 mm)
            </option>
            <option value="custom">Custom</option>
          </select>
          </div>
        )}

        <div className="my-6">
          <button
            className="button"
            onClick={handleCalculation}
          >
            CALCULATE
          </button>
        </div>

        <hr />

        <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>SR.NO</th>
              <th>Items</th>
              <th>Quantity</th>
              <th>Unit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td>Bricks</td>
              <td>{`${bricks} ~ ${Math.ceil(bricks)}`}</td>
              <td>Nos.</td>
            </tr>
            <tr>
              <td>02</td>
              <td>Cement</td>
              <td>{cement}</td>
              <td>Bag</td>
            </tr>
            <tr>
              <td>03</td>
              <td>Sand</td>
              <td>{sand}</td>
              <td>Cum</td>
            </tr>
          </tbody>
        </table>
        </div>
        <div className="note">
          <p>
            <b>Note: </b>1. Please consider a wastage factor of about{" "}
            <u>5-10%</u> for materials. <br /> 2. Mix ratio = 1:6 and Dry Mix
            Constant = 1.33
          </p>
        </div>
      </div>
    </div>
  );
};

export default Brickwork;
