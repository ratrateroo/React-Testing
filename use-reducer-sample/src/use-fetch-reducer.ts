import { Action } from "./action.types";
import { Nullable } from "./nullable.types";
import { State } from "./state.types";

export function useFetchReducer<DataT, ErrorT = string>(
  initialData: Nullable<DataT> = null
): [State<DataT, ErrorT>, React.Dispatch<Action<DataT, ErrorT>>] {
  const initialState = {
    status: "idle",
    data: initialData,
    error: null,
  };

  function fetchReducer<DataT, ErrorT = string>(
    currentState: State<DataT, ErrorT>,
    action: Action<DataT, ErrorT>
  ): State<DataT, ErrorT> {
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

  return React.useReducer(fetchReducer, initialState);
}
