const store = require("./app/store"); // Importing the redux store
const cakeActions = require("./features/cake/cakeSlice").cakeActions; // Importing the cake actions
const icecreamActions =
  require("./features/iceCream/icecreamSlice").icecreamActions; // Importing the icecream actions
const fetchUsers = require("./features/user/userSlice").fetchUsers;

console.log("Initial state", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Updated state", store.getState());
}); // Subscribing/Listening to events and loggging it to the console using the logger middleware

store.dispatch(fetchUsers());

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(3));

// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.restocked(4));

// unsubscribe();
