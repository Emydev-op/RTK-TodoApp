const redux = require("redux");
const produce = require("immer").produce;
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;

const STREET_UPDATE = "STREET_UPDATE";

const initialState = {
  name: "Emeka",
  address: {
    street: "327 Borno Way",
    city: "Yaba",
    state: "Lagos",
  },
};

function updateStreet(street) {
  return {
    type: STREET_UPDATE,
    payload: street,
  };
}

const streetReducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATE:
      //   return {
      //     ...state,
      //     address: {
      //       ...state.address,
      //       street: action.payload,
      //     },
      //   };
      return produce(state, (dispatch) => {
        dispatch.address.street = action.payload;
      });
    default:
      return state;
  }
};

const store = createStore(streetReducer);
console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);

const actions = bindActionCreators({ updateStreet }, store.dispatch);

actions.updateStreet("6, Crown Jewel");
actions.updateStreet("300, Grace Street");

unsubscribe();
