import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { mortarActions } from '../store/mortarSlice';

const Mortar = () => {

    const dispatch = useDispatch()
    const {cement, sand, water} = useSelector((store)=>store.mortar)
    
  
    const volumeElement = useRef();
    const unitElement = useRef();
    const mixRatioElement = useRef();
    const waterRatioElement=useRef()
    const constantElement =useRef();
  
    const handleCalculation=(event)=>{
      event.preventDefault();
  
      const volume=volumeElement.current.value;
      const unit=unitElement.current.value;
      const mixRatio= mixRatioElement.current.value;
      const waterRatio=waterRatioElement.current.value
      const constant = constantElement.current.value;
  
  dispatch(mortarActions.calculateMortar({volume, unit, mixRatio, waterRatio, constant}))

    }
  
    return (
      <div className="main-content ">
        <div className="form-container">
          <h2 className="mortar-form-title"> Mortar </h2>
          <div className="mortar-form-group">
            <input
              type="text"
              placeholder="Enter Volume"
              className="input-field "
              ref={volumeElement}
            />
            <select
               className="select-field"
              ref={unitElement}
            >
              <option value="m3">m³</option>
            <option value="mm3">mm³</option>
            <option value="cm3">cm³</option>
            <option value="in3">in³</option>
            <option value="ft3">ft³</option>
            </select>
          </div>
  
          <div className="mortar-form-group">
            <div className="input-field">
              Cement:Sand Ratio
            </div>
            <select
              className="select-field"
              ref={mixRatioElement}
            >
              <option value="4">1:3</option>
              <option value="5">1:4</option>
              <option value="6">1:5</option>
              <option value="7">1:6</option>
            </select>
          </div>

          <div className="mortar-form-group">
            <div className="input-field">
              Water-Cement Ratio
            </div>
            <select
              className=" select-field"
              ref={waterRatioElement}
            >
              <option value="0.4">0.4</option>
              <option value="0.5">0.5</option>
              <option value="0.6">0.6</option>
            </select>
          </div>

          <div className="mortar-form-group">
            <div className="input-field">
             Dry Mix Constant
            </div>
            <select
              className="select-field"
              ref={constantElement}
            >
              <option value="1.33">1.33</option>
              <option value="1.34">1.34</option>
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
          <div className="mortar-table-container">
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
          <p><b>Note: </b>1. Please consider an additional <u> 20% </u> material wastage.</p></div>
        </div>
      </div>
    );
  
}

export default Mortar