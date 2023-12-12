import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";
import { useState } from "react";

const IceCreamView = () => {
  const [value, setValue] = useState(1);
  const dispatch = useDispatch();
  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams);
  return (
    <div>
      <h2>Number of Ice Creams - {numOfIcecreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order Ice Creams</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>
        Restock Ice Creams
      </button>
    </div>
  );
};

export default IceCreamView;
