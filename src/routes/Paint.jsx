import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paintActions } from "../store/paintSlice";

const Paint = () => {
  const dispatch = useDispatch();
  const { paint } = useSelector((store) => store.paint);

  const areaElement = useRef();
  const unitElement = useRef();
  const paintTypeElement = useRef();
  const noOfCoatElement = useRef();

  const handleCalculation = (e) => {
    e.preventDefault();

    const area = areaElement.current.value;
    const unit = unitElement.current.value;
    const paintType = paintTypeElement.current.value;
    const noOfCoat = noOfCoatElement.current.value;

    dispatch(paintActions.calculatePaint({ area, unit, paintType, noOfCoat }));
  };

  return (
    <div className="main-content ">
      <div className="form-container">
        <h2 className="form-title">Wall Paint </h2>
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter Area"
            className="input-field "
            ref={areaElement}
          />
          <select className="select-field" ref={unitElement}>
            <option value="m2">m²</option>
            <option value="mm2">mm²</option>
            <option value="cm2">cm²</option>
            <option value="in2">in²</option>
            <option value="ft2">ft²</option>
          </select>
        </div>

        <div className="form-group">
          <div className="putty-input-field">Types of Paint</div>
          <select className="putty-input-field" ref={paintTypeElement}>
            <option value="10">Emulsion Paint</option>
            <option value="12">Enamel Paint</option>
            <option value="5">Textured Paint</option>
            <option value="8">Distemper Paint</option>
            <option value="8">Acrylic Paint</option>
          </select>
        </div>

        <div className="form-group">
          <div className="input-field">No. of Coats</div>
          <select className=" select-field" ref={noOfCoatElement}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>

        <div>
          <button className="button " onClick={handleCalculation}>
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
                <td>Paint</td>
                <td>{paint}</td>
                <td>Liters</td>
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

export default Paint;
