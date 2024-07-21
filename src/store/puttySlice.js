import { createSlice } from "@reduxjs/toolkit";


const puttySlice = createSlice({
    name: "putty",
    initialState: {
        putty: 0,
    },
    reducers: {
        calculatePutty:(state, action)=>{

            let areaInSqMeters;
            switch (action.payload.unit) {
                case 'mm2':
                    areaInSqMeters = action.payload.area / 1e6;
                    break;
                case 'cm2':
                    areaInSqMeters = action.payload.area / 10000;
                    break;
                case 'in2':
                    areaInSqMeters = action.payload.area / 1550;
                    break;
                case 'ft2':
                    areaInSqMeters = action.payload.area / 10.7639;
                    break;
                default:
                    areaInSqMeters = action.payload.area;
            }

            return{...state, putty:((areaInSqMeters * action.payload.noOfCoat * action.payload.thickness)/action.payload.puttyType).toFixed(2)}

        }
    }
})

export const puttyActions = puttySlice.actions

export default puttySlice;