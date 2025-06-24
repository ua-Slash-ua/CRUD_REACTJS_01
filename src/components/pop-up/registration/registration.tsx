import './registration.css'
import {openClosePopUp} from "../../../functions/open-pup.ts";
export function Registration(){
    return(
        <>
            <div className="pop-up-overlay"></div>
            <div className="pop-up-hero" id="pup-register">
                <div className="pop-up-header">
                    <h3>
                        Реєстрація
                    </h3>
                    <div
                        className="close-pop-up"
                        onClick={() => openClosePopUp('pup-register')}
                    >
                        &times; {/* Це хрестик */}
                    </div>
                </div>
                <div className="pop-up-content">
                    <label htmlFor="login">Логін</label>
                    <input type="text" name="login"/>
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