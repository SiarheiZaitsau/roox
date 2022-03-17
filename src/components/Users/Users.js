import styles from "./Users.module.scss";
import AsideMenu from "../AsideMenu/AsideMenu";
import Loader from "../../elements/Loader/Loader";
import axios from "axios";
import User from "../User/User";
import { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = () => {
    setIsLoading(true);
    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    axios
      .get(apiUrl)
      .then((res) => {
        setUsers(res.data);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getData();
  }, []);

  const sortByCity = () => {
    setUsers([...users.sort((a, b) => (a.address.city > b.address.city ? 1 : -1))]);
  };
  const sortByCompany = () => {
    setUsers([...users.sort((a, b) => (a.company > b.company ? 1 : -1))]);
  };
  if (isLoading) {
    return (
      <div className={styles.loader__container}>
        <AsideMenu sortByCity={sortByCity} sortByCompany={sortByCompany} />
        <Loader className={styles.loader} />
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <AsideMenu sortByCity={sortByCity} sortByCompany={sortByCompany} />
      <div className={styles.users}>
        <h2 className={styles.users__title}>Список пользователей</h2>
        <ul className={styles.users__list}>
          {users.map((user) => {
            return <User key={user.id} userData={user} />;
          })}
        </ul>
        <p className={styles.users__description}> Найдено {users.length} пользователей</p>
      </div>
    </div>
  );
};

export default Users;
