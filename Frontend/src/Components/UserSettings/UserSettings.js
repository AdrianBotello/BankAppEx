import image from '../../images/userSettings.png';
import './UserSettings.css';
export function UserSettings({ name, lastName, email, phone, id }) {
    
    return (
        <div className="bigCont">
            <div className="settingsCont">
                <div className="imagen">
                    <img src={image} />
                </div>
                <div className="formulario">
                <h1></h1>
                    <input type="text" value={name}></input>
                    <input type="text" value={lastName} ></input>
                    <input type="text" value={email}></input>
                    <input type="text" value={phone }></input>
                    <button onClick={ changeUserConf}>SAVE</button>
                </div>
                        
                       
            </div>

        </div>
    )
}

function changeUserConf() {

}
