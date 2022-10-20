import { Nullable } from "./nullable.types";

export type IddleState<DataT> = {
  status: "idle";
  data: Nullable<DataT>;
  error: null;
};
