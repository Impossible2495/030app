import styles from "./Profile.module.css";

export const Profile = () => {
  return (
    <div className="row">
      <div className="col-md-4">
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=300&q=70"
          alt=""
          width="100%"
        />
      </div>
      <div className="col-md-8">
        <h2 className={styles.header}>
          Фамилия и имя: <span>Павел Федоров</span>
        </h2>
        <p className={styles.about}>О себе...</p>
        <p className={styles.id}>
          Id: <span>9</span>
        </p>
        <p style={{padding: "10px", border: "1px solid green", borderRadius: "4px"}}>
          Email: <span>PavelFed@gmail.com</span>
        </p>
      </div>
    </div>
  );
};
