import { createSlice } from "@reduxjs/toolkit";

//Initial value of the state
const initialState = {
  numOfCakes: 10,
};

// This is a reducer function that creates the reducer, the acion name and function
const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes--;
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

// We export the reducer and the action
export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;
