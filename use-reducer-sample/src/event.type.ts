export type Event<DataT, ErrorT> =
  | { type: "FETCH" }
  | { type: "RESOLVE"; data: DataT }
  | { type: "REJECT"; error: ErrorT };
