import React,{Component} from 'react';
import './App.css';
import Login from './components/autentificare/login'
import Register from './components/autentificare/register'

class App extends Component{
  render(){
    return(
      <div>
        {/* <Login /> */}
        <Register />
      </div>
    )
  }
}

export default App;
