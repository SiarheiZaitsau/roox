import cn from "classnames";
import React from "react";

import Label from "../Label/Label";
import styles from "./Textarea.module.scss";

const TextArea = React.forwardRef((props, reference) => {
  const { className, placeholder, label, ...otherProps } = props;

  return (
    <div className={styles.container}>
      {label && <Label text={label} />}
      <textarea
        className={cn(styles.textArea, className)}
        placeholder={placeholder}
        {...otherProps}
        ref={reference}
      />
    </div>
  );
});

export default TextArea;
