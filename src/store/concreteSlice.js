import { createSlice } from "@reduxjs/toolkit";


const concreteSlice = createSlice({
    name: "concrete",
    initialState: {
        cement: 0,
        sand: 0,
        aggregate: 0,
    },
    reducers: {
        calculateConcrete: (state, action) => {

            let volumeInCubicMeters;
            switch (action.payload.volumeUnit) {
                case 'mm3':
                    volumeInCubicMeters = action.payload.concVolume / 1e9;
                    break;
                case 'cm3':
                    volumeInCubicMeters = action.payload.concVolume / 1e6;
                    break;
                case 'in3':
                    volumeInCubicMeters = action.payload.concVolume / 61024;
                    break;
                case 'ft3':
                    volumeInCubicMeters = action.payload.concVolume / 35.3147;
                    break;
                default:
                    volumeInCubicMeters = action.payload.concVolume;
            }

            const ratios = {
                "M5": { cement: 1, sand: 5, aggregate: 10 },
                "M7.5": { cement: 1, sand: 4, aggregate: 8 },
                "M10": { cement: 1, sand: 3, aggregate: 6 },
                "M15": { cement: 1, sand: 2, aggregate: 4 },
                "M20": { cement: 1, sand: 1.5, aggregate: 3 },
                "M25": { cement: 1, sand: 1, aggregate: 2 }
            };

            
            const dryVolume = volumeInCubicMeters * action.payload.dryMixConstant

            const ratioValues = ratios[action.payload.ratio];
            const totalParts = ratioValues.cement + ratioValues.sand + ratioValues.aggregate;

            return {
                ...state, cement: (((dryVolume * ratioValues.cement) / totalParts)/0.0347).toFixed(2),
                sand: ((dryVolume * ratioValues.sand) / totalParts).toFixed(2),
                aggregate: ((dryVolume * ratioValues.aggregate) / totalParts).toFixed(2)
            }

        }

    }
})

export const concreteActions = concreteSlice.actions

export default concreteSlice;