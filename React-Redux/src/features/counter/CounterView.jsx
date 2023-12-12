import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

const CounterView = () => {
  const counter = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Count - {counter}</h2>
      <button onClick={() => dispatch(increment())}>Increase Count</button>
      <button onClick={() => dispatch(decrement())}>Decrease Count</button>
    </div>
  );
};

export default CounterView;
