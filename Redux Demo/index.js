const redux = require("redux");
const createStore = redux.createStore; // Used to create a redux store
const bindActionCreators = redux.bindActionCreators; // Used to bind actions with dispatch function/Call
const combineReducers = redux.combineReducers; // Used to combine various reducers and send them to redux store
const applyMiddleware = redux.applyMiddleware; // Call middleware for adding other packagesto redux
const reduxlogger = require("redux-logger");
const logger = reduxlogger.createLogger();

// We created the action type names
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

// These are the actions and their parameters
function orderCake() {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
}

function orderIceCream(qty = 1) {
  return {
    type: ICECREAM_ORDERED,
    payload: qty,
  };
}

function restockCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
}

function restockIceCream(qty = 1) {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty,
  };
}

// We create the initial state of all the states
const initialCakeState = {
  numOfCakes: 10,
};

const initialIceScreamState = {
  numOfIceCreams: 20,
};

// We create  the reducers and pass the initial state and the actions
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };

    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceScreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams + action.payload,
      };
    default:
      return state;
  }
};

// Passing the various reducers as an object
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

// Creating the redux store and passing the logger middleware
const store = createStore(rootReducer, applyMiddleware(logger)); // passing the logger middleware to the store

console.log("Initial state", store.getState());

// Listening for changes in the state
// const unsubscribe = store.subscribe(() =>
//   console.log("Updated state", store.getState())
// );

//Listening for changes in the state using the redux-logger
const unsubscribe = store.subscribe(() => {});

// Passing the action and the dispatch call
const actions = bindActionCreators(
  { orderCake, restockCake, orderIceCream, restockIceCream },
  store.dispatch
);

actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(3);
actions.orderIceCream();
actions.orderIceCream();
actions.orderIceCream();
actions.orderIceCream();
actions.orderIceCream();
actions.restockIceCream(6);

// Removing/Returning the event listeners
unsubscribe();
