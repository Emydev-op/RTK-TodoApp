import "./App.css";
import CakeView from "./features/cake/CakeView";
import CounterView from "./features/counter/CounterView";
import IceCreamView from "./features/iceCream/iceCreamView";
import UserView from "./features/user/UserView";

function App() {
  return (
    <>
      <CakeView />
      <IceCreamView />
      <CounterView />
      <UserView />
    </>
  );
}

export default App;
