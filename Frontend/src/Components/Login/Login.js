/* eslint-disable react-hooks/rules-of-hooks */
import * as React from 'react';
import logo from '../../images/logo192.png';
import './Login.css';
import { Navigate } from "react-router-dom";
import { useFetch } from '../../useFetch';
import { saveInfo, delInfo } from '../../SessionStorage';
//var bcrypt = require('bcrypt');
export function Login() {
    //export const Login = () => {
    delInfo("client");
    return (
        <div class="container">

            <img src={logo} className="Login-logo" />
            
                <h1>Login</h1>
            <input type="text" id="email" placeholder="Username *" className="draw-border" onKeyPress={handleInputKeyPress} ></input>
                <br></br>

            <input type="password" id="pass" placeholder="Password *" className="draw-border" onKeyPress={handleInputKeyPress} ></input>
                <br>
                </br>
                <button onClick={CheckUser} id="confBut">LOGIN</button>
            
        
        </div>
        
    )
}

function handleInputKeyPress(e) {
    if (e.key === 'Enter') {
        document.getElementById('confBut').click();
    }
} 
function CheckUser() {

    //console.log(document.getElementById("pass").value);
    var email = document.getElementById("email").value;
    var passWord = document.getElementById("pass").value;

    if (!requerido(email) || !requerido(passWord)) {
        return window.alert("The fields are not empty");
    }
    loginUser(email, passWord);
    var url = "http://localhost:8083/users/login/" + email + "/" + passWord;


    /*if (email == "solera@solera.com" && passWord == "bootcamp5") {
        return (
            window.location.href = "/user"
        )
    } else {
        window.alert("User not found");
    }*/
    
    //console.log(url);
    /*await fetch(url, {
        method: 'GET'
    }).then((response) => {
        console.log("response", response.body.getReader());
        debugger;
        if (response.body) {
            return (
                window.location.href = "/user"
            );
        } else {
            window.alert("Usuario fallido");    
        }
    }
    ).catch(error => console.error(error))*/
    //var passHash = hash(passWord);
}

function requerido(str) {
    if (str == "" || str == null) {
        return false;
    }
    return true;
}

function loginUser(email, pass) {
    var url = "http://localhost:8083/users/login/" + email + "/" + pass;
    var pasa = false;
    useFetch(url,'GET').then(data => {
        console.log(data);
        if (!data) {
            return window.alert("Usuario fallido");
        } else {
            getClient(email);
        }
    }).catch(error => console.error(error));

    console.log(pasa);

    /*while (pasa) {
        url = "http://localhost:8083/users/" + email;
        useFetch(url).then(data => {
            console.log(data);
            saveInfo("client", JSON.stringify(data));
            pasa = false;
            window.location.href = "/user";
        })
    }*/
}

function getClient(email) {
    var url = "http://localhost:8083/users/" + email;
    useFetch(url,'GET').then(data => {
        console.log(data);
        saveInfo("client", JSON.stringify(data));
    })
    /*useFetch("http://localhost:8083/bankAccounts/getbyuser/" + email).then(fetchRes => {
        saveInfo("bankAcc", fetchRes);
        console.log(fetchRes);
    })
    debugger;*/
    window.location.href = "/user";

}
/*async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}*/
/*function hash(str) {
    var cript = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(str, cript);
    return hash; 
}*/