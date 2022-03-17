import React from "react";
import Button from "../../elements/Button/Button";
import styles from "./AsideMenu.module.scss";
import { useLocation } from "react-router-dom";
const AsideMenu = (props) => {
  const location = useLocation();
  const currentUrl = location.pathname;
  return (
    <div className={styles.filters__container}>
      <h5 className={styles.filters__title}> Сортировка</h5>
      <Button
        disabled={currentUrl === "/" ? false : true}
        onClick={() => props.sortByCity()}
        className={styles.filters__button}
      >
        по городу
      </Button>
      <Button
        disabled={currentUrl === "/" ? false : true}
        onClick={() => props.sortByCompany()}
        className={styles.filters__button}
      >
        по компании
      </Button>
    </div>
  );
};
export default AsideMenu;
