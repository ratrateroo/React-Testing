import "./App.css";
import React from "react";
import { useFetchReducer } from "./use-fetch-reducer";

export default function App() {
  const [state, dispatch] = useFetchReducer(null);

  function fetchMockApi() {
    return new Promise((resolve, reject) => {
      const randomNumber = Math.random();
      setTimeout(() => {
        if (randomNumber > 0.5) {
          resolve("Success!🎉");
        } else {
          reject("Failure!😭");
        }
      }, 1000);
    });
  }

  function fetchData() {
    dispatch({ type: "FETCH" });
    fetchMockApi()
      .then((result) => {
        dispatch({ type: "RESOLVE", data: result });
      })
      .catch((err) => {
        dispatch({ type: "REJECT", error: err });
      });
  }

  return (
    <>
      {state.status === "loading" ? <p>loading...</p> : undefined}
      {state.status === "success" ? (
        <p>{JSON.stringify(state.data)}</p>
      ) : undefined}
      {state.status === "failure" ? (
        <p>{JSON.stringify(state.error)}</p>
      ) : undefined}
      <button disabled={state.status === "loading"} onClick={fetchData}>
        Fetch Data
      </button>
    </>
  );
}
