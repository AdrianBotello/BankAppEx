import logo from '../../images/logo192.png';
import './SignUp.css';

export function SignUp() {
    return (
        <body>
            <img src={logo} className="Sign-logo" />
            <form>
                <h1>Sign Up</h1>
                <input type="text" name="fstName" placeholder="First Name *" className="draw-border"></input>
                <br></br>
                <input type="text" name="lstName" placeholder="Last Name *" className="draw-border"></input>
                <br></br>
                <input type="text" name="email" placeholder="Username *" className="draw-border"></input>
                <br></br>
                <input type="password" name="pass" placeholder="Password *" className="draw-border"></input>
                <br/>
                <input type="password" name="repPass" placeholder="Confirm Password *" className="draw-border"></input>
                <br>
                </br>

                <button onClick={SignUpSendInfo}>Sign Up</button>
            </form>

        </body>

    )
}
function SignUpSendInfo() {
    console.log("Test");
}