import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { puttyActions } from "../store/puttySlice";

const Putty = () => {
  const dispatch = useDispatch();
  const { putty } = useSelector((store) => store.putty);

  const areaElement = useRef();
  const unitElement = useRef();
  const puttyTypeElement = useRef();
  const noOfCoatElement = useRef();
  const thicknessElement = useRef();

  const handleCalculation = (e) => {
    e.preventDefault();

    const area = areaElement.current.value;
    const unit = unitElement.current.value;
    const puttyType = puttyTypeElement.current.value;
    const noOfCoat = noOfCoatElement.current.value;
    const thickness = thicknessElement.current.value;

    dispatch(
      puttyActions.calculatePutty({
        area,
        unit,
        puttyType,
        noOfCoat,
        thickness,
      })
    );
  };

  return (
    <div className="main-content">
      <div className="form-container">
        <h2 className="form-title"> Putty</h2>
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter Area"
            className="input-field "
            ref={areaElement}
          />
          <select
            className="select-field"
            ref={unitElement}
          >
             <option value="m2">m²</option>
            <option value="mm2">mm²</option>
            <option value="cm2">cm²</option>
            <option value="in2">in²</option>
            <option value="ft2">ft²</option>
          </select>
        </div>

        <div className="form-group">
          <div className="putty-input-field">
            Types of Putty
          </div>
          <select
            className=" putty-input-field"
            ref={puttyTypeElement}
          >
            <option value="10">White Cement Based Putty</option>
            <option value="8">Acrylic Putty</option>
            <option value="8">Gypsum-Based Wall Putty</option>
            <option value="10">Polymer-Based Putty</option>
          </select>
        </div>

        <div className="form-group">
          <div className="input-field">
            No. of Coats
          </div>
          <select
            className="select-field"
            ref={noOfCoatElement}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="Enter Coat Thickness (in mm)"
            className="brickwork-input-field"
            ref={thicknessElement}
          />
        </div>

        <div >
          <button
            className="button "
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
              <td>Putty</td>
              <td>{putty}</td>
              <td>Kgs</td>
            </tr>
          </tbody>
        </table>
        </div>
        <div className="note">
          <p>
            <b>Note: </b>Please consider an additional <u> 10% </u> material
            wastage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Putty;
