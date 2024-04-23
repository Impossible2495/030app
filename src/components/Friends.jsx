import React from "react";
import { NavLink } from "react-router-dom";

const TableRow = (props) => {
  return (
    <tr>
      <th scope="row">{props.index + 1}</th>
      <td>
        <NavLink to={"/profile/" + props.id}>
          {props.lastname} {props.name}
        </NavLink>
      </td>
      <td>{props.email}</td>
    </tr>
  );
};

export class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userRow: [] };
  }

  componentDidMount() {
    this.props.function().then((users) => {
      console.log(users);
      let usersCount = users.length;
      let userRow = [];
      for (let i = 0; i < usersCount; i++) {
        userRow.push(
          <TableRow
            key={i}
            index={i}
            id={users[i].id}
            name={users[i].name}
            lastname={users[i].lastname}
            email={users[i].email}
          />
        );
        this.setState({ userRow: userRow });
      }
    });
  }

  render() {
    return (
      <>
        <h2 className="text-center"></h2>
        <div className="row">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Фамилия и имя</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>{this.state.userRow}</tbody>
          </table>
        </div>
      </>
    );
  }
}
