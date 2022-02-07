import React from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import "./ConfirmDelete";
import ConfirmDelete from "./ConfirmDelete";

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

  delete(event) {
    axios.delete("http://localhost:4000/user/" + event.target.value);
  }

  render() {
    return (
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
                <button onClick={this.delete} value={user.id}>
                  delete
                </button>
                <ConfirmDelete id={user.id} />
                {/* <button>
                  <a href={`update/${user.id}`}>update</a>
                </button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}
