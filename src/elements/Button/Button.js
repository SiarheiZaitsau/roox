import cn from "classnames";

import styles from "./Button.module.scss";

function Button(props) {
  const { className, children, color, ...otherProps } = props;

  return (
    <button
      className={cn(
        styles.button,
        {
          [styles.secondary]: color === "secondary",
        },
        className
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default Button;
