function fetchReducer<DataT, ErrorT = string>(currentState, action) {
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
