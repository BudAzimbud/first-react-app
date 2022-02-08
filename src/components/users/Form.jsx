import { Form, Button } from "react-bootstrap";
import React from "react";
import axios from "axios";
import "./Form.css";
import { useNavigate } from "react-router-dom";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

class FormSubUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: () => {},
      username: "",
      password: "",
      isEneble: true,
      selectedFile: null,
    };

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChangeUsername(event) {
    this.setState({
      username: event.target.value,
    });
  }

  onChangePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  goToUserTable() {
    history.push("/table", { replace: true });
  }

  handleSubmit(event) {
    event.preventDefault();

    // Create an object of formData
    const formData = new FormData();

    formData.append("file", this.state.selectedFile);
    console.log(formData);

    axios
      .post("http://localhost:8080/companies/file", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    // axios
    //   .post("http://localhost:4000/user", {
    //     username: this.state.username,
    //     password: this.state.password,
    //   })
    //   .then((res) => {
    //     console.log(this.state);
    //     this.goToUserTable();
    //   })
    //   .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="form-user">
        <Form
          onSubmit={(event) => {
            this.handleSubmit(event);
          }}
          encType="multipart/form-data"
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={this.onChangeUsername}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={this.onChangePassword}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicFile">
            <Form.Control
              type="file"
              onChange={(e) => {
                console.log(e.target.files[0]);
                this.setState({ selectedFile: e.target.files[0] });
              }}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default function FormUser() {
  let navigate = useNavigate();

  return <FormSubUser navigate={navigate} />;
}
