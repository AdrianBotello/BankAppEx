import logo from '../../images/logo192.png';
import './SignUp.css';

import { useFetch } from '../../useFetch';

export function SignUp() {
    //<button onClick={SignUpSendInfo}>SIGN UP</button>
    
    return (
        <body>
            <div class="box">
                <form onSubmit={(event) => event.preventDefault()}>
                    <img src={logo} className="Sign-logo" />
                
                    <h1>Sign Up</h1>

                    <label name="fstName" for="draw-border" class="label-helper">First Name *</label><br/>
                    <input type="text" name="fstName" id="fstName" placeholder="First Name *" className="draw-border" ></input>
                    <br/>

                    <input type="text" name="lstName" id="lstName" placeholder="Last Name *" className="draw-border"></input>
                    <br />
                    <input type="text" name="usrName" id="usrName" placeholder="User Name *" className="draw-border"></input>
                    <br />
                    <input type="text" name="email" id="email" placeholder="email *" className="draw-border"></input>
                    <br />
                    <input type="number" name="phone" id="phone" placeholder="Phone number" className="draw-border"></input>
                    <br />
                    <input type="password" name="pass" id="pass" placeholder="Password *" className="draw-border"></input>
                    <br />

                    <input type="password" name="repPass" id="repPass" placeholder="Confirm Password *" className="draw-border"></input>
                    <br/>

                    <input type="submit" className="conf" onClick={SignUpSendInfo} value="SIGN UP"></input>
                    
                </form>
            </div>
            

        </body>

    )
}
function SignUpSendInfo() {
    var fstName = document.getElementById("fstName").value;
    var lstName = document.getElementById("lstName").value;
    var usrNmae = document.getElementById("usrName").value;
    var phone = document.getElementById("usrName").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var repPass = document.getElementById("repPass").value;
    if (!validarEscrito(fstName) || !validarEscrito(lstName) || !validarEscrito(email) || !validarEscrito(pass) || !validarEscrito(repPass)) {
        return window.alert("All the fields will be written");
    }
    if (!validateName(fstName) || !validateName(lstName)) {
        return window.alert("Name or surname not correct!");
    } 
    if (!validateSamePassWord(pass, repPass)) {
        return window.alert("The passwords will be the same!");
    }
    if (!validateEmail(email)) {
        return window.alert("Incorrect email!");
    }
    var url = "http://localhost:3000/signup"
    const user = {
        firstName: fstName,
        secondName: lstName,
        userName: usrNmae,
        email: email,
        phone: phone,
        password: pass
    }
    console.log(user);
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));  
    //{"firstName":"Dojo","secondName":"kata","email":"solera@solera.com","phone":63254875,"password":"bootcamp5","id":2}
    window.location.href = "/";
    
}

function validateName(name) {
    var expresion = /[A-Z]{1}[a-z]/;
    return expresion.test(name);
}
function validateEmail(email) {
    var expresion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    return expresion.test(email);
}

function validarEscrito(str) {
    if (str == "" || str == " ") {
        return false;
    } return true;
}

function validateSamePassWord(str1, str2) {
    if (str1 == str2) {
        return true;
    } else {
        return false;
    }
}

