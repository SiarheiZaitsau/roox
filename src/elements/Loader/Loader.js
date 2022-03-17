import React from "react";
import styles from "./Loader.module.scss";
import cn from "classnames";

const Loader = (props) => {
  const { className } = props;
  return (
    <div className={cn(styles["lds-spinner"], className)}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
export default Loader;
