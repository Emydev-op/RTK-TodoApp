const configureStore = require("@reduxjs/toolkit").configureStore; //Allows configuring the redux store
// const reduxLogger = require("redux-logger");
const cakeReducer = require("../features/cake/cakeSlice"); // Importing the cake reducer
const icecreamReducer = require("../features/iceCream/icecreamSlice"); // Importing the iceCream reducer
const userReducer = require("../features/user/userSlice");

// const logger = reduxLogger.createLogger();

// Creating the redux store and pasing the reducers and middleware as objects
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
