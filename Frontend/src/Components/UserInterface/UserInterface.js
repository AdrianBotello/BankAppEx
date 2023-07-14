// JavaScript source code
import logoInterface from '../../images/logoUserInterface.png';
import userImagen from '../../images/userImage.png';
import homeIcon from '../../images/homeIcon.png';
import accIcon from '../../images/userIcon.png';
import bankIcon from '../../images/bankIcon.png';
import notificationIcon from '../../images/notificationIcon.png';
import logOutIcon from '../../images/logOutIcon.png';

import { UserSettings } from '../UserSettings/UserSettings.js'
import { BankAccount } from '../BankAccount/BankAccount.js';
import { getInfo, delInfo, saveInfo } from '../../SessionStorage';

import './UserInterface.css';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import { useFetch } from '../../useFetch';

export function UserInterface() {

    /*const data = {
        firstname: "Edgar",
        secondname: "Johns",
        email: "Norene39@yahoo.com",
        phoneNumber: "625-316-9882",
        user: "Katharina_Bernier",
        id: "aaaasdasdasd",
        account: 
            { balance: 1681.37 }
        
    };*/
    /*const data2 = await useFetch("http://localhost:8083/users/solera@solera.com");
    console.log("AA",data2);*/
    const data = getInfo("client");
    console.log(data);
    useFetch("http://localhost:8083/bankAccounts/getbyuser/" + data.email, 'GET').then(fetchRes => {
        saveInfo("bankAcc", JSON.stringify( fetchRes));
        console.log(fetchRes);
    })

    var nameComp = getNameComp(data.firstName, data.secondName);
    /*if (loading === true) {
        return (
            <h4>Is loading...</h4>
        )
    } else {*/
        return (
            <div name="container">
                <table>
                    <tr className="top">
                        <th colspan="3">
                            <img src={userImagen} />
                            <p>{nameComp}</p>
                            <p>@{data.userName}</p>

                        </th>
                        <th colspan="7">
                            <img src={logoInterface} className="headerImage" ></img>
                        </th>
                    </tr>
                    <tr>
                        <td colspan="3">
                            <div className="bankInfo">
                                <p><b>333</b></p>
                                <p>Account Balance</p>
                            </div>

                            <ul>
                                <li> <img src={homeIcon} /> <Link to="">Home</Link> </li>
                                <li> <img src={accIcon} /> <Link to="settings">My Account</Link> </li>
                                <li> <img src={bankIcon} /> <Link to="bankAccount">Bank Account</Link> </li>
                                <li> <img src={notificationIcon} /> <Link to="">Notifications</Link> </li>
                                <li> <img src={logOutIcon} />  <Link to="/" >Logout</Link></li>
                            </ul>
                        </td>
                        <td colspan="7">
                            <div className="redirect">
                                
                                <Routes>
                                    <Route path="/settings" element={<UserSettings></UserSettings>} />
                                    <Route path="/bankAccount" element={<BankAccount></BankAccount >} />
                                </Routes>
                                    
                            </div>





                        </td>
                    </tr>
                </table>
            </div >
        )
    //}
}
function getNameComp(fstName, lstName) {
    var name = fstName + " " + lstName.charAt();
    return name;
}

/*async function useFetch(url) {
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    console.log({ data });
    return await response.json;
}*/
