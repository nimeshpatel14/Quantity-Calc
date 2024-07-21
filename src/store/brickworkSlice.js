import { createSlice } from "@reduxjs/toolkit";


const brickworkSlice = createSlice({
    name: "brickwork",
    initialState: {
        cement: 0,
        sand: 0,
        bricks: 0,
    },
    reducers: {
        calculateBrickwork: (state, action) => {

            let areaInSqMeters;
            switch (action.payload.areaUnit) {
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

           const brickworkVolume = areaInSqMeters * action.payload.width

           return {
            ...state, bricks: (brickworkVolume/action.payload.brickVolume).toFixed(2) , cement:(((brickworkVolume*0.3*1.33*1)/7)/0.0347).toFixed(2) , sand:((brickworkVolume*0.3*1.33*6)/7).toFixed(2) 
           } 
        }

    }
})

export const brickworkActions = brickworkSlice.actions

export default brickworkSlice;