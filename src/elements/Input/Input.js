import cn from "classnames";
import React from "react";

import Label from "../Label/Label";
import styles from "./Input.module.scss";

const Input = React.forwardRef((props, reference) => {
  const { className, placeholder, type, label, error, ...inputProperties } = props;
  return (
    <div className={cn(styles.container, className)}>
      {label && <Label text={label} />}
      <input
        className={cn(styles.input, {
          [styles.error]: error,
        })}
        placeholder={placeholder}
        type={type || "text"}
        ref={reference}
        {...inputProperties}
      />
    </div>
  );
});
export default Input;
