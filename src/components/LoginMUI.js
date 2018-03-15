import React from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import '../styles/Login.css'

export default class extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }
  render() {
    const handleSubmit = (event) => {
      const payload = {
        event: event,
        username: this.state.username,
        password: this.state.password
      }
      this.props.submitHandler(payload)
    }
    
    return (
      <Paper className="login">
        <form className="flexBox" onSubmit={handleSubmit} >
          <TextField required
                     id="muiUsername"
                     placeholder="Username"
                     onChange={event => this.setState({ username: event.target.value})}/>
          <TextField required
                     id="muiPassword"
                     placeholder="Password"
                     onChange={event => this.setState({ password: event.target.value})}/>
          <RaisedButton type="submit"
                        label="Login" />
        </form>
      </Paper>
    );
  }
}