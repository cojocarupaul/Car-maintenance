import React,{Component} from 'react';
import './register.css';

class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            name:'',
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
                <label>Name</label>
                <input type="text" id="name" ref="name" placeholder="Enter your name"></input> 
                <label>Password</label>
                <input type="password" id="password" ref="pass" placeholder="Enter your password"></input>
                <label>Confirm password</label>
                <input type="password" id="cpassword" ref="cpass" placeholder="Confirm your password"></input>
                <button type="submit" onClick={this.handleClick}>Register</button>
                <hr class="rounded"></hr>
                <button type="submit" onClick={this.handleClick}>Go to login</button>
            </form>
        ];
    }
}
export default Register;