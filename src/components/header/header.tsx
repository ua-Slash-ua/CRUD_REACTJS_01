import './header.css'
import logo from '../.././assets/logo (1).png'
import {Link} from "react-router-dom";
import type {HeaderProps} from "../../types.ts";
import {openClosePopUp} from "../../functions/open-pup.ts";

export function Header({isAuth, setIsAuth}:HeaderProps) {
    return (
        <header>
            <div className="some-logo">
                <img src={logo} alt="Логотип"/>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Бібліотека книг</Link>
                    </li>
                    { isAuth ? (
                        <li>
                            <Link to="/manager">Менеджер книг</Link>
                        </li>
                    ) : null }


                </ul>
            </nav>
            <div className="auth-log">
                {isAuth ? (
                    <button onClick={() => setIsAuth ? setIsAuth(false) :true}>LogOut</button>
                ) : (
                    <>
                        <button onClick={() => openClosePopUp('pup-login')}>LogIn</button>
                        <button onClick={() => openClosePopUp('pup-register')}>
                            Registration
                        </button>
                    </>
                )}

            </div>
        </header>

    );
}
