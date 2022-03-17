import cn from "classnames";

import styles from "./Label.module.scss";

function Label(props) {
  const { className, text } = props;

  return <label className={cn(styles.info, className)}>{text}</label>;
}

export default Label;
