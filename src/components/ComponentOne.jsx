import { actionone } from "../actions";
import { useSelector, useDispatch, useSelector } from "react-redux";
const ComponentOne = () => {
  const stateVariable = useSelector((state) => state.variableKey);
  const dispatch = useDispatch();
  return (
    <div>
      <p>Variable: {stateVariable}</p>
      <button onClick={() => dispatch(actionone())}>Change variable</button>
    </div>
  );
};
export default ComponentOne;
