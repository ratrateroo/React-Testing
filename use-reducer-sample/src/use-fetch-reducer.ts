import { Action } from "./action.types";
import { State } from "./state.types";

function fetchReducer<DataT, ErrorT = string>(
  currentState: State<DataT, ErrorT>,
  action: Action<DataT, ErrorT>
) {
  switch (action.type) {
    case "FETCH":
      return {
        ...currentState,
        status: "loading",
      };
    case "RESOLVE":
      return {
        status: "success",
        data: action.data,
        error: null,
      };
    case "REJECT":
      return {
        data: null,
        status: "failure",
        error: action.error,
      };
    default:
      return currentState;
  }
}
