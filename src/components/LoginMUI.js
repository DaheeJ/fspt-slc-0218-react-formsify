import React from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export default class extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }
  render() {
    const handleUsernameChange = (event) => {
       // console.log(event.target.value)
      this.setState({ username: event.target.value})
    }
    return (
      <Paper>
        <form>
          <TextField required
                     placeholder="Username"
                     onChange={handleUsernameChange}/>
          <TextField required
                     placeholder="Password"
                     onChange={event => this.setState({ password: event.target.value})}/>
          <RaisedButton type="submit"
                        label="Login" />
        </form>
      </Paper>
    );
  }
}