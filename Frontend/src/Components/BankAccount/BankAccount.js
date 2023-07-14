/* eslint-disable react-hooks/rules-of-hooks */
import { getInfo, saveInfo } from '../../SessionStorage';
import { useFetch } from '../../useFetch';
import './BankAccount.css';

export function BankAccount() {

    return (
        <div className="bankContainer">
            <table>
                <tr>
                    <td>
                        <h3>Bank Accounts</h3>
                    </td>
                    <td>
                        <button className="createButt">CREATE</button>
                    </td>
                </tr>
                <RenderBankAccounts></RenderBankAccounts>
            </table>
        </div>
    )
}
export function RenderBankAccounts() {
    const data = getInfo("bankAcc");
    /*const data = {
        bankAccount: [
            {
                bankName: "Labadie Bank",
                bankLocation: "O'Hara"
            },
            {
                bankName: "HSBC",
                bankLocation: "London"
            }
        ]
    }*/
    console.log(data)
    var bankName;
    return (
        <>
            {data.map(bank => {
                //console.log("bank: " + bank.bankLocation + " - " + bank.bankName);
                //const bankName = bank.bankLocation + " - " + bank.bankName;
                bankName = bank.bankLocation + " - " + bank.bankName;
                //console.log("ABS " + bankName);
                return (
                    <tr key={bankName}>
                        <td>
                            <h4>{bankName}</h4>
                        </td>
                        <td>
                            <button className="delButton" onClick={event => deleteAccount(event, bank.accountNumber)}>DELETE</button>
                        </td>
                    </tr>

                )
            })}
        </>
    )
    //data.bankAccount.map(bank => {
    //    console.log("bank: " + bank.bankLocation + " - " + bank.bankName);
    //    bankName = bank.bankLocation + " - " + bank.bankName;
    //    console.log("ABS " + bankName);
    //    return (
    //        //data.bankAccount.map(bank => {
    //        <tr key={bankName}>
    //            <td>
    //                <h4>{bankName}</h4>
    //            </td>
    //            <td>
    //                <button>DELETE</button>
    //            </td>
    //        </tr>
    //        //})

    //    )
    //})
}

function deleteAccount(event, bankAccount) {
    useFetch("http://localhost:8083/bankaccounts/" + bankAccount, 'DELETE').then(data => {
        if (data) {
            reloadPage();
        } else {
            window.alert('Error deleting the account');
        }
    })
}

function reloadPage() {
    const cli = getInfo("client");
    useFetch("http://localhost:8083/bankAccounts/getbyuser/" + cli.email, 'GET').then(fetchRes => {
        saveInfo("bankAcc", JSON.stringify(fetchRes));
        console.log(fetchRes);
    })

    window.location.reload();
}