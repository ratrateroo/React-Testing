import React, { forwardRef } from "react";

const Button = forwardRef((props, ref) => (
  <button type="button" {...props} ref={ref}>
    {props.children}
  </button>
));

export default Button;
