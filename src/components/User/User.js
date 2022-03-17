import styles from "./User.module.scss";
import { NavLink } from "react-router-dom";
const User = (props) => {
  const { name, id, company } = props.userData;
  const { city } = props.userData.address;
  return (
    <li className={styles.userCard__container}>
      <ul className={styles.userCard__fields}>
        <li className={styles.userCard__field}>
          <p className={styles.userCard__fieldName}> ФИО: </p>
          <p className={styles.userCard__fieldValue}>{name}</p>
        </li>
        <li className={styles.userCard__field}>
          <p className={styles.userCard__fieldName}> город: </p>
          <p className={styles.userCard__fieldValue}>{city}</p>
        </li>
        <li className={styles.userCard__field}>
          <p className={styles.userCard__fieldName}> компания: </p>
          <p className={styles.userCard__fieldValue}>{company.name}</p>
        </li>
      </ul>
      <NavLink
        state={{ data: props.userData }}
        to={`/user/${id}`}
        className={styles.userCard__link}
      >
        подробнее
      </NavLink>
    </li>
  );
};

export default User;
