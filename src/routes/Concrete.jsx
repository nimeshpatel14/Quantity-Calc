import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { concreteActions } from "../store/concreteSlice";

const Concrete = () => {
  const dispatch = useDispatch();

  const { cement, sand, aggregate } = useSelector((store) => store.concrete);

  const concVolumeElement = useRef();
  const volumeUnitElement = useRef();
  const ratioElement = useRef();
  const dryMixConstantElement = useRef();

  const handleCalculate = (event) => {
    event.preventDefault();

    const concVolume = concVolumeElement.current.value;
    const volumeUnit = volumeUnitElement.current.value;
    const ratio = ratioElement.current.value;
    const dryMixConstant = dryMixConstantElement.current.value;

    dispatch(
      concreteActions.calculateConcrete({
        concVolume,
        volumeUnit,
        ratio,
        dryMixConstant,
      })
    );
  };

  return (
    <div className="main-content">
    <div className="form-container">
      <h2 className="form-title">Concrete</h2>
        <div className="form-group">
          <input type="text" placeholder="Enter Volume" ref={concVolumeElement} id="concVolumeElement" className="input-field" />
          <select id="volumeUnitElement" className="select-field" ref={volumeUnitElement}>
            <option value="m3">m³</option>
            <option value="mm3">mm³</option>
            <option value="cm3">cm³</option>
            <option value="in3">in³</option>
            <option value="ft3">ft³</option>
          </select>
        </div>

        <div className="form-group">
          <div className="input-field">Ratio</div>
          <select id="ratioElement" className="select-field" ref={ratioElement}>
            <option value="M5">M5</option>
            <option value="M7.5">M7.5</option>
            <option value="M10">M10</option>
            <option value="M15">M15</option>
            <option value="M20">M20</option>
            <option value="M25">M25</option>
          </select>
        </div>
        
        <div className="form-group">
          <div className="input-field">Dry Mix Constant</div>
          <select id="dryMixConstantElement" className="select-field" ref={dryMixConstantElement}>
            <option value="1.52">1.52</option>
            <option value="1.53">1.53</option>
            <option value="1.54">1.54</option>
          </select>
        </div>
        <div>
          <button className="button" onClick={handleCalculate}>
            CALCULATE
          </button>
        </div>
      <hr />

      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Sr. No.</th>
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
              <td>Aggregate</td>
              <td>{aggregate}</td>
              <td>Cum</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="note">
        <p>
          <b>Note: </b> Please consider an additional <u> 2-3% </u> material
          wastage.
        </p>
      </div>
    </div>
  </div>
  );
};

export default Concrete;
