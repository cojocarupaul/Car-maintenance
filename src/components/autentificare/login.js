import React,{Component} from 'react';
import './login.css';

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
    }
    handleClick= ()=>{
        this.setState({
            username: this.refs.uname.value,
            password: this.refs.pass.value
          });
        console.log('this is: ',this.state);
    }
    render(){
        return[
            <form id="form_login">
                <h1>Welcome</h1>
                <label>Username</label>
                <input type="email" id="username" ref="uname" placeholder="Enter your email"></input>
                <label>Password</label>
                <input type="password" id="password" ref="pass" placeholder="Enter your password"></input>
                <button type="submit" onClick={this.handleClick}>Login</button>
                <hr class="rounded"></hr>
                <button type="submit" onClick={this.handleClick}>Create new acccout</button>
            </form>
        ];
    }
}
export default Login;