const createSlice = require("@reduxjs/toolkit").createSlice;

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
module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;
