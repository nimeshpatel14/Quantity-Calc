import { createSlice } from "@reduxjs/toolkit";


const paintSlice = createSlice({
    name: "paint",
    initialState: {
        paint: 0,
    },
    reducers: {
        calculatePaint:(state, action)=>{

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

            return{...state, paint:((areaInSqMeters * action.payload.noOfCoat)/action.payload.paintType).toFixed(2)}

        }
    }
})

export const paintActions = paintSlice.actions

export default paintSlice;