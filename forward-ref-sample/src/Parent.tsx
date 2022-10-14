import { useRef } from "react";
import Child, { RefHandler } from "./Child";

export default function App() {
  const childRef = useRef<RefHandler>(null);

  return (
    <>
      <p>Parent</p>
      <button
        onClick={() => {
          alert(
            "Input field is: " + childRef?.current?.inputRef?.current?.value
          );
        }}
      >
        Read child input
      </button>
      <button onClick={() => childRef?.current?.pressAlert()}>
        Press child button
      </button>
      <hr />
      <Child ref={childRef} />
    </>
  );
}
