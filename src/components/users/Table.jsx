import React from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import "./ConfirmDelete";
import ConfirmDelete from "./ConfirmDelete";
import "./Table.css";

export default class TableUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataUser: [],
    };
  }

  async componentDidMount() {
    const user = await axios.get("http://localhost:4000/user");
    this.setState({
      dataUser: user.data,
    });
  }

  render() {
    return (
      <div className="mt-2 table-user">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>username</th>
              <th>password</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.dataUser.map((user, index) => (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>
                  <ConfirmDelete id={user.id} />
                </td>
                <td>
                  <a href={"update/"+user.id}>edit</a>
                </td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
