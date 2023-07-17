import logoInterface from '../../images/logoUserInterface.png';
import userImagen from '../../images/userImage.png';
import homeIcon from '../../images/homeIcon.png';
import accIcon from '../../images/userIcon.png';
import bankIcon from '../../images/bankIcon.png';
import notificationIcon from '../../images/notificationIcon.png';
import logOutIcon from '../../images/logOutIcon.png';

import { getInfo, delInfo, saveInfo } from '../../SessionStorage';
import { getNameComp } from '../UserInterface/UserInterface.js'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

export function NavList(){
    const data = getInfo("client");
    var nameComp = getNameComp(data.firstName, data.secondName);

    return (
        <div className='navBar'>
            <img src={userImagen} />
            <p>{nameComp}</p>
            <p>@{data.userName}</p>
            <p><b>333</b></p>
            <p>Account Balance</p>

            <ul>
                <li> <img src={homeIcon} /> <Link to="">Home</Link> </li>
                <li> <img src={accIcon} /> <Link to="settings">My Account</Link> </li>
                <li> <img src={bankIcon} /> <Link to="bankAccount">Bank Account</Link> </li>
                <li> <img src={notificationIcon} /> <Link to="">Notifications</Link> </li>
                <li> <img src={logOutIcon} />  <Link to="/" >Logout</Link></li>
            </ul>
        </div>
    )
}