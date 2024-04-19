
const TableRow = (props) => {
  return (
    <tr>
      <th scope="row">{props.index + 1}</th>
      <td>{props.lastname}</td>
      <td>{props.name}</td>
    </tr>
  );
} 



export const Friends = (props) => {
  let users = props.function();
  console.log(users);
  let usersCount = Object.keys(users).length;
  let userRow = [];
  for (let i = 0; i < usersCount; i++) {
    userRow.push(<TableRow key={i} index={i} name={users[i].name} lastname={users[i].lastname}/>);
  }
  return (
    <>
      <h2 className="text-center"></h2>
      <div className="row">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Фамилия</th>
              <th scope="col">Имя</th>
            </tr>
          </thead>
          <tbody>
            {userRow}
          </tbody>
        </table>
      </div>
    </>
  );
};