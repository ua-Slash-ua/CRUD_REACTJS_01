import './login.css'
import {openClosePopUp} from "../../../functions/open-pup.ts";
import {handlerLogin} from "../../../api/users/login.ts";
import { useAuth } from "../../../api/context/auth.tsx";

export function Login(){
    const { setIsAuth } = useAuth();

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
                    <label htmlFor="login-email">Пошта</label>
                    <input type="text" name="login-email" id="login-email"/>
                    <label htmlFor="login-password">Пароль</label>
                    <input type="text" name="login-password" id="login-password"/>
                </div>
                <div className="pop-up-action">
                    <button onClick={async () => {
                        await handlerLogin(setIsAuth)
                    }}>Авторизація</button>
                </div>
            </div>

        </>
    )
}