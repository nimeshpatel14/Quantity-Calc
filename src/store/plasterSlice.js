import { createSlice } from "@reduxjs/toolkit";


const plasterSlice = createSlice({
    name: "plaster",
    initialState: {
        cement: 0,
        sand: 0,
        water: 0,
    },
    reducers: {
        calculatePlaster: (state, action) => {

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

            const plasterVolume = areaInSqMeters * ((action.payload.thickness)/1000) * 1.33

            return {
                ...state, cement: (((plasterVolume * 1) / 5)/0.0347).toFixed(2),
                sand: ((plasterVolume * 4) / 5).toFixed(2),
                water:(((plasterVolume * 1) / 5) * 1440 * 0.6).toFixed(2)  
            }
        }
    }
})

export const plasterActions = plasterSlice.actions

export default plasterSlice;