import logo from '../../images/logo192.png';
import './SignUp.css';

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
                    <br/>
                    <input type="text" name="email" id="email" placeholder="Username *" className="draw-border"></input>
                    <br/>
                    <input type="password" name="pass" id="pass" placeholder="Password *" className="draw-border"></input>
                    <br/>

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

