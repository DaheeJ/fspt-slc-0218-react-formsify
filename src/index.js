import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Forms from './pages/Forms'

const App = () => (
  <MuiThemeProvider>
    <Forms/>
  </MuiThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('root'));