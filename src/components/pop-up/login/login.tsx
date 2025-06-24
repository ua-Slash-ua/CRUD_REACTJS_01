import './login.css'
import {openClosePopUp} from "../../../functions/open-pup.ts";
export function Login(){
    return(
        <>
            <div className="pop-up-overlay"></div>
            <div className="pop-up-hero" id="pup-login">
                <div className="pop-up-header">
                    <h3>
                        Авторизація
                    </h3>
                    <div
                        className="close-pop-up"
                        onClick={() => openClosePopUp('pup-login')}
                    >
                        &times; {/* Це хрестик */}
                    </div>
                </div>
                <div className="pop-up-content">
                    <label htmlFor="email">Пошта</label>
                    <input type="text" name="email"/>
                    <label htmlFor="password">Пароль</label>
                    <input type="text" name="password"/>
                </div>
                <div className="pop-up-action">

                </div>
            </div>

        </>
    )
}