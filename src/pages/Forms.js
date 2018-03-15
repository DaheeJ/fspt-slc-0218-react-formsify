import React from 'react'

import Login from '../components/Login'
import LoginMUI from '../components/LoginMUI'

export default class extends React.Component {
  render() {
    const handleSubmit = (payload) => {
      payload.event.preventDefault()
      console.log(payload.username + " : " + payload.password)
    }
    return (
      <div>
        <Login submitHandler={handleSubmit}/>
        <hr/>
        <LoginMUI submitHandler={handleSubmit}/>
      </div>
    );
  }
}