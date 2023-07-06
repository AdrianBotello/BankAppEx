import * as React from 'react';
import logo from '../../images/logo192.png';
import './Login.css';
import { UserInterface } from './../UserInterface/UserInterface.js';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
//var bcrypt = require('bcrypt');
export function Login() {
//export const Login = () => {
    return (
        <div class="container">

            <img src={logo} className="Login-logo" />
            
                <h1>Login</h1>
                <input type="text" id="email" placeholder="Username *" className="draw-border"></input>
                <br></br>

                <input type="password" id="pass" placeholder="Password *" className="draw-border"></input>
                <br>
                </br>
                <button onClick={CheckUser} >LOGIN</button>
            
        
        </div>
        
    )
}
function CheckUser() {
    
    console.log(document.getElementById("pass").value);
    var email = document.getElementById("email").value;
    var passWord = document.getElementById("pass").value;

    /*if (email == "solera@solera.com" && passWord == "bootcamp5") {
        return (
            window.location.href = "/user"
        )
    } else {
        window.alert("User not found");
    }*/
    fetch("http://localhost:8083/users/login" + email + "/" + passWord, {
        'mode': 'no-cors',
        'headers': {
            'Access-Control-Allow-Origin': '*',
        }
    }).then((response) => {
        if (response) {
            return (
                window.location.href = "/user"
            );
        } else {
            window.alert("Usuario fallido");
        }
    }
    )
    //var passHash = hash(passWord);
    
}

/*function hash(str) {
    var cript = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(str, cript);
    return hash; 
}*/