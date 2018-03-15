import React from 'react'

import Login from '../components/Login'
import LoginMUI from '../components/LoginMUI'

export default class extends React.Component {
  render() {
    return (
      <div>
        <Login/>
        <LoginMUI/>
      </div>
    );
  }
}