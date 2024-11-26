import { useSelector, useDispatch } from "react-redux";
function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Count is: {count}</h2>
      <button
        onClick={() => dispatch({ type: "INCREMENT", payload: count * 5 })}
      >
        INCREMENT
      </button>
      <button
        onClick={() => dispatch({ type: "DECREMENT", payload: count - 5 })}
      >
        DECREMENT
      </button>
    </div>
  );
}

export default Counter;
