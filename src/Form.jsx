import "./App.css";
import {Form ,Button} from 'react-bootstrap'
import React from 'react'
import axios from 'axios'
import './Form.css'

export default class FormUser extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      username : '',
      password : ''
    }

    this.onChangeUsername = this.onChangeUsername.bind(this)
    this.onChangePassword = this.onChangePassword.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    
  }

  onChangeUsername(event){
    this.setState({
      username : event.target.value
    })
  }

  onChangePassword(event){
    this.setState({
      password : event.target.value
    })
  }
  handleSubmit() {
    axios.post('http://localhost:4000/user',{
      username : this.state.username ,
      password : this.state.password
    })
  }

  render(){
    return (
      <div className="form-user">
        <Form> 
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={this.onChangeUsername} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={this.onChangePassword} />
          </Form.Group>


          <Button variant="primary" onClick={this.handleSubmit}>
            Submit
          </Button>

        </Form>
      </div>
    );
  }

}

