type IddleState<DataT> = {
  status: "idle";
  data: Nullable<DataT>;
  error: null;
};

type LoadingState<DataT, ErrorT> = {
  status: "loading";
  data: Nullable<DataT>;
  error: Nullable<ErrorT>;
};

type SucessState<DataT> = {
  status: "success";
  data: DataT;
  error: null;
};

type FailureState<ErrorT> = {
  status: "failure";
  data: null;
  error: ErrorT;
};

export type State<DataT, ErrorT> =
  | IddleState<DataT>
  | LoadingState<DataT, ErrorT>
  | SucessState<DataT>
  | FailureState<ErrorT>;
