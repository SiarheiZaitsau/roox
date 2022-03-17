import React from "react";
import Button from "../../elements/Button/Button";
import styles from "./AsideMenu.module.scss";
const AsideMenu = (props) => {
  return (
    <div className={styles.filters__container}>
      <h5 className={styles.filters__title}> Сортировка</h5>
      <Button onClick={() => props.sortByCity()} className={styles.filters__button}>
        по городу
      </Button>
      <Button onClick={() => props.sortByCompany()} className={styles.filters__button}>
        по компании
      </Button>
    </div>
  );
};
export default AsideMenu;
