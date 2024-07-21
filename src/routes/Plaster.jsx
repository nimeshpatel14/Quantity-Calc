import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { plasterActions } from "../store/plasterSlice";

const Plaster = () => {

  const dispatch = useDispatch()
  const {cement, sand, water} = useSelector((store)=>store.plaster)

  const areaElement = useRef();
  const unitElement = useRef();
  const thicknessElement = useRef();

  const handleCalculation=(event)=>{
    event.preventDefault();

    const area=areaElement.current.value;
    const unit=unitElement.current.value;
    const thickness= thicknessElement.current.value;

dispatch(plasterActions.calculatePlaster({area, unit, thickness}))
  }

  return (
    <div className="main-content">
      <div className="form-container">
        <h2 className="form-title">Plaster </h2>
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
          <div className="input-field">
            Thickness
          </div>
          <select
            className=" select-field"
            ref={thicknessElement}
          >
            <option value="6">6mm</option>
            <option value="12">12mm</option>
            <option value="15">15mm</option>
            <option value="20">20mm</option>
          </select>
        </div>

        <div >
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
              <td>Cement</td>
              <td>{cement}</td>
              <td>Bag</td>
            </tr>
            <tr>
              <td>02</td>
              <td>Sand</td>
              <td>{sand}</td>
              <td>Cum</td>
            </tr>
            <tr>
              <td>03</td>
              <td>Water</td>
              <td>{water}</td>
              <td>Liters</td>
            </tr>
          </tbody>
        </table>
        </div>
        <div className="note">
        <p><b>Note: </b>1. Please consider an additional <u> 20% </u> material wastage. <br /> 2. Mix ratio = 1:4 and Dry Mix Constant = 1.33</p></div>
      </div>
    </div>
  );
};

export default Plaster;
