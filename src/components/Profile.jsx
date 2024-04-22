import styles from "./Profile.module.css";

export const Profile = (props) => {
  let userId = window.location.pathname.split("/")[2];
  let user = props.function(userId);
  // console.log(userId);
  return (
    <div className="row">
      <div className="col-md-4">
        <img
          src={user.avatar}
          alt=""
          width="100%"
        />
      </div>
      <div className="col-md-8">
        <h2 className={styles.header}>
          Фамилия и имя: <span>{user.lastname} {user.name}</span>
        </h2>
        <p className={styles.about}>{user.about}</p>
        <p className={styles.id}>
          Id: <span>{user.id}</span>
        </p>
        <p style={{padding: "10px", border: "1px solid green", borderRadius: "4px"}}>
          Email: <span>{user.email}</span>
        </p>
      </div>
    </div>
  );
};
