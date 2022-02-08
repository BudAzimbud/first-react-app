import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

export default function UpdateUser(props, context) {
  let navigate = useNavigate();
  const [user, setUser] = useState({});

  let { id } = useParams({});

  useEffect(() => {
    axios
      .get("http://localhost:4000/user/" + id)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const submit = (e) => {
    e.preventDefault();
    console.log(user);
    axios.put("http://localhost:4000/user/" + id, user);
    navigate("/table", { replace: true });
  };

  return (
    <div className="form-user">
      <Form onSubmit={submit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder={user.username}
            onChange={(e) => {
              e.preventDefault();
              setUser(Object.assign(user, { username: e.target.value }));
            }}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder={user.password}
            onChange={(e) => {
              e.preventDefault();
              setUser({ password: e.target.value });
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
