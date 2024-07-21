import { createSlice } from "@reduxjs/toolkit";


const mortarSlice = createSlice({
    name: "mortar",
    initialState: {
        cement: 0,
        sand: 0,
        water: 0,
    },
    reducers: {
        calculateMortar: (state, action) => {

            let volumeInCubicMeters;
            switch (action.payload.unit) {
                case 'mm3':
                    volumeInCubicMeters = action.payload.volume / 1e9;
                    break;
                case 'cm3':
                    volumeInCubicMeters = action.payload.volume / 1e6;
                    break;
                case 'in3':
                    volumeInCubicMeters = action.payload.volume / 61024;
                    break;
                case 'ft3':
                    volumeInCubicMeters = action.payload.volume / 35.3147;
                    break;
                default:
                    volumeInCubicMeters = action.payload.volume;
            }

            const ratios = {
                "4": { cement: 1, sand: 3,  },
                "5": { cement: 1, sand: 4, },
                "6": { cement: 1, sand: 5, },
                "7": { cement: 1, sand: 6 },
            };

            const dryVolume = volumeInCubicMeters * action.payload.constant

            const ratioValues = ratios[action.payload.mixRatio];

            return {
                ...state, cement: (((dryVolume * ratioValues.cement) / action.payload.mixRatio)/0.0347).toFixed(2),
                sand: ((dryVolume * ratioValues.sand) / action.payload.mixRatio).toFixed(2),
                water:(((dryVolume * ratioValues.cement) / action.payload.mixRatio) * 1440 * action.payload.waterRatio).toFixed(2)  
            }
        }
    }
})

export const mortarActions = mortarSlice.actions

export default mortarSlice;