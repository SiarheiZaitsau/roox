import styles from "./UserProfile.module.scss";
import AsideMenu from "../AsideMenu/AsideMenu";
import { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Button from "../../elements/Button/Button";
import Input from "../../elements/Input/Input";
import TextArea from "../../elements/TextArea/Textarea";
import { useForm } from "react-hook-form";
const UserProfile = () => {
  const location = useLocation();
  const { data } = location.state;
  const [isEditable, setIsEditable] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: data.name,
      username: data.username,
      email: data.email,
      street: data.address.street,
      city: data.address.city,
      zipcode: data.address.zipcode,
      phone: data.phone,
      website: data.website,
    },
  });
  const onSubmit = (data, e) => {
    console.log(JSON.stringify(data), "data");
    e.target.reset();
  };
  const onError = (errors, e) => console.log(errors, "error");

  return (
    <div className={styles.container}>
      <AsideMenu />
      <div className={styles.profile__container}>
        <div className={styles.profile__headerContainer}>
          <h2 className={styles.profile__title}>Профиль пользователя</h2>
          <Button
            onClick={() => setIsEditable(true)}
            size="small"
            className={styles.profile__headerButton}
          >
            Редактировать
          </Button>
        </div>
        <form onSubmit={handleSubmit(onSubmit, onError)} className={styles.profile__form}>
          <div className={styles.profile__formContainer}>
            <Input
              className={styles.profile__input}
              {...register("name", { required: true, disabled: !isEditable })}
              placeholder={data.name || ""}
              type="text"
              label="Name"
              error={errors?.name}
            />
            <Input
              className={styles.profile__input}
              {...register("username", { required: true, disabled: !isEditable })}
              placeholder={data.username || ""}
              type="text"
              label="User name"
              error={errors?.username}
            />
            <Input
              className={styles.profile__input}
              {...register("email", { required: true, disabled: !isEditable })}
              placeholder={data.email || ""}
              type="text"
              label="E-mail"
              error={errors.email}
            />
            <Input
              className={styles.profile__input}
              {...register("street", { required: true, disabled: !isEditable })}
              placeholder={data.address.street || ""}
              type="text"
              label="Street"
              disabled={!isEditable}
              error={errors?.street}
            />
            <Input
              className={styles.profile__input}
              {...register("city", { required: true, disabled: !isEditable })}
              placeholder={data.address.city || ""}
              type="text"
              label="City"
              disabled={!isEditable}
              error={errors?.city}
            />
            <Input
              className={styles.profile__input}
              {...register("zipcode", { required: true, disabled: !isEditable })}
              placeholder={data.address.zipcode || ""}
              type="text"
              label="Zip code"
              disabled={!isEditable}
              error={errors?.zipcode}
            />
            <Input
              className={styles.profile__input}
              {...register("phone", { required: true, disabled: !isEditable })}
              placeholder={data.phone || ""}
              type="tel"
              label="Phone"
              disabled={!isEditable}
              error={errors?.phone}
            />
            <Input
              className={styles.profile__input}
              {...register("website", {
                required: true,
                disabled: !isEditable,
              })}
              placeholder={data.website || ""}
              type="text"
              label="Website"
              disabled={!isEditable}
              error={errors?.website}
            />
            <TextArea
              className={styles.profile__textArea}
              {...register("comments")}
              label="Comments"
              disabled={!isEditable}
            />
          </div>
          <Button
            disabled={!isEditable}
            color="secondary"
            type="submit"
            className={styles.profile__submit}
          >
            Отправить
          </Button>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
