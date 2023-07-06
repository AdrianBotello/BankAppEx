// JavaScript source code
import logoInterface from '../../images/logoUserInterface.png';
import userImagen from '../../images/userImage.png';
import homeIcon from '../../images/homeIcon.png';
import accIcon from '../../images/userIcon.png';
import bankIcon from '../../images/bankIcon.png';
import notificationIcon from '../../images/notificationIcon.png';
import logOutIcon from '../../images/logOutIcon.png';

import { UserSettings } from '../UserSettings/UserSettings.js'

import './UserInterface.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link
} from "react-router-dom";

export function UserInterface() {

    const data = {
        firstname: "Edgar",
        secondname: "Johns",
        email: "Norene39@yahoo.com",
        phoneNumber: "625-316-9882",
        user: "Katharina_Bernier",
        id: "aaaasdasdasd",
        account: 
            { balance: 1681.37 }
        
    };
    fetch("http://localhost:8083/users/3", { 'mode': 'no-cors' }).then((response) => {
        console.log(response);
    });

    var nameComp = getNameComp(data.firstname, data.secondname);
    return (
        <div name="container">
        <table>
            <tr className="top">
                <th colspan="3">
                    <img src={userImagen} />
                    <p>{nameComp}</p>
                    <p>@{data.user}</p>

                </th>
                <th colspan="7">
                    <img src={logoInterface} className="headerImage" ></img>
                </th>
            </tr>
            <tr>
                <td colspan="3">
                    <div className="bankInfo">
                        <p><b>${data.account.balance}</b></p>
                        <p>Account Balance</p>
                    </div>

                    <ul>
                        <li> <img src={homeIcon} /> <Link to="">Home</Link> </li>
                        <li> <img src={accIcon} /> <Link to="/settings">My Account</Link> </li>
                        <li> <img src={bankIcon} /> <Link to="">Bank Account</Link> </li>
                        <li> <img src={notificationIcon} /> <Link to="">Notifications</Link> </li>
                        <li> <img src={logOutIcon} />  <Link to="/">Logout</Link></li>
                    </ul>
                </td>
                <td colspan="7">
                        <div className="redirect">
                            <UserSettings name={data.firstname} lastName={data.secondname} email={data.email} phone={data.phoneNumber} id={data.id} />
                    </div>
                    
                            
                                
                            
                    
                </td>
                </tr>
            </table>
        </div >
    )
}
function getNameComp(fstName, lstName) {
    var name = fstName + " " + lstName.charAt();
    return name;
}
