import React from "react";
import { Action } from "./action.types";
import { Event } from "./event.type";
import { IddleState } from "./idle.type";
import { Nullable } from "./nullable.types";
import { State } from "./state.types";

export function useFetchReducer<DataT, ErrorT = string>(
  initialData: Nullable<DataT> = null
) {
  //: [State<DataT, ErrorT>, React.Dispatch<Action<DataT, ErrorT>>]
  const initialState: IddleState<DataT> = {
    status: "idle",
    data: initialData,
    error: null,
  };

  function fetchReducer<DataT, ErrorT = string>(
    state: State<DataT, ErrorT>,
    event: Event<DataT, ErrorT>
  ): State<DataT, ErrorT> {
    switch (event.type) {
      case "FETCH":
        return {
          ...state,
          status: "loading",
        };
      case "RESOLVE":
        return {
          status: "success",
          data: event.data,
          error: null,
        };
      case "REJECT":
        return {
          status: "failure",
          data: null,
          error: event.error,
        };
      default:
        return state;
    }
  }

  return React.useReducer(fetchReducer, initialState);
}
