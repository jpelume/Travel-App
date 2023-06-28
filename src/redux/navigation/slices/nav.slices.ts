import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  origin: null,
  destination: null,
  travelInformation: null,
};

export const navSlice = createSlice({
  name: 'navSlice',
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action?.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelInformation: (state, action) => {
      state.travelInformation = action.payload;
    },
  },
});

export const {setOrigin, setDestination, setTravelInformation} =
  navSlice.actions;

export const getOrigin = ({state}: any) => state.navSlice.origin;
export const getDestination = ({state}: any) => state.navSlice.destination;
export const getTravelInformation = ({state}: any) =>
  state.navSlice.travelInformation;

export default navSlice.reducer;
