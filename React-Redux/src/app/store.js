import { configureStore } from "@reduxjs/toolkit"; //Allows configuring the redux store
// const reduxLogger = require("redux-logger");
import cakeReducer from "../features/cake/cakeSlice"; // Importing the cake reducer
import icecreamReducer from "../features/iceCream/icecreamSlice"; // Importing the iceCream reducer
import userReducer from "../features/user/userSlice";
import counterReducer from "../features/counter/counterSlice";

// const logger = reduxLogger.createLogger();

// Creating the redux store and pasing the reducers and middleware as objects
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
    counter: counterReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
