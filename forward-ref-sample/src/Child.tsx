import { forwardRef, RefObject, useImperativeHandle, useRef } from "react";
import Button from "./components/Button";
import React from "react";

type Props = {};

export type RefHandler = {
  pressAlert: () => void;
  inputRef: RefObject<HTMLInputElement>;
};

const Child = forwardRef<RefHandler, Props>((props, ref) => {
  const submitRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const reference = React.createRef();

  useImperativeHandle(ref, () => ({
    inputRef,
    pressAlert: () => submitRef?.current?.click(),
  }));

  return (
    <div>
      <p>Child Component</p>
      <input type="text" value="Jack-o'-lantern" ref={inputRef} />
      <br />
      <button onClick={() => alert("Alert button pressed")} ref={submitRef}>
        Child button
      </button>
      <Button className="primary" ref={reference}>
        Hello
      </Button>
    </div>
  );
});

Child.displayName = "Child";

export default Child;
