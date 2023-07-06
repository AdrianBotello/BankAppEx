import logo from '../../images/logo192.png';
import './Login.css';
export function Login() {
    return (
        <body>
            <img src={logo} className="Login-logo" />
            <form>
                <h1>Login</h1>
                <input type="text" name="email" placeholder="Username *" className="draw-border"></input>
                <br></br>

                <input type="password" name="pass" placeholder="Password *" className="draw-border"></input>
                <br>
                </br>
                <button onClick={CheckUser} >LOGIN</button>
            </form>
        
        </body>
        
    )
}
function CheckUser() {

}